import type { Person, APIErrors, APIResponse, APIPostBody } from '../lib/types';
import React, { useState, useEffect } from 'react';
import RsvpPerson from './RsvpPerson';

const defaultPerson: Person = {
  firstname: null,
  lastname: null,
  email: null,
  attending: true,
  diet: null
};

export default function RSVP() {
  const [ success, setSuccess ] = useState<Array<Person>>([]);
  const [ errors, setErrors ] = useState<APIErrors>([]);
  const [ submitting, setSubmitting ] = useState<boolean>(false);
  const [ numPeople, setNumPeople ] = useState(1);
  const [ people, setPeople ] = useState([defaultPerson]);
  const allowRSVPs: boolean = true;

  function addPerson(e) {
    e.preventDefault();
    setPeople([...people, defaultPerson]);
  }

  useEffect(() => {}, [people]);
  useEffect(() => {
    console.log('number of people', numPeople);
    setPeople(Array.from({ length: numPeople }, () => defaultPerson));
  }, [numPeople]);



  async function sendRSVP(e) {
    e.preventDefault();

    setSubmitting(true);
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(people)
    });

    const { errors, data }: APIResponse = await response.json();

    setSubmitting(false);

    if (response.status !== 200) {
      setErrors(errors || ['Something went wrong.']);
    } else {
      setSuccess(data);
    }
  }

  if (!allowRSVPs) {
    return (
      <div className="rsvp-form">
        <p>
          The RSVP form will be made available in Spring 2023.
          Until then, please book your accomodations as early as possible!
          We'll send an email once the form becomes available.
        </p>
      </div>
    )
  }

  return (
    <React.Fragment>

    {success.length === 0 &&
      <form className="rsvp-form" onSubmit={sendRSVP}>
        <div className="field form-counter" key="person-count">
          <p>How many people are you RSVP'ing for?&nbsp;&nbsp;
            <input className="input" type="number" value={numPeople} min="1" max="5" onChange={e => setNumPeople(parseInt(e.target.value))}/>
          </p>
        </div>

        <div className="rsvp-people" key="rsvp-form-people">
          {people &&
            people.map((person, idx) => {
              return <RsvpPerson person={person} people={people} effect={setPeople} index={idx} />
            })
          }
        </div>

        <div className="field" key="rsvp-form-buttons">
          <div className="control">
            <input type="submit" className="button color-light-bg" value={submitting ? "Submitting RSVP ..." : "Submit"} />
          </div>
        </div>
      </form>
    }

    {errors.length > 0 && success.length <= 0 &&
      <div className="form-errors color-red-bg">
        <p className="color-light">There were some errors in the form!</p>
        <ul>
        {errors.map((error, i) => {
          return <li className="color-light" key={`error_${i}`}>{error}</li>
        })}
        </ul>
      </div>
    }

    {success.length > 0 &&
      <div className="form-response">
        <p className="has-text-weight-bold">
          ❤️ Thanks! If you're attending, we're thrilled! If you can't, we get it. We'll miss you! Here's the information we got:
        </p>
        <p>
          <ul>
            {success.map((p: Person) => {
              return <li>{p.firstname} {p.lastname} ({p.email}) <strong>attending: {p.attending ? 'yes ☺️' : 'no 😢'}</strong></li>
            })}
          </ul>
        </p>
        <p>If this information looks correct, you're all set. If you need to make a change, send Sam a message at matthews.sam@gmail.com. If you need to submit more RSVPs, refresh the page.</p>
      </div>
    }
    </React.Fragment>
  );
}