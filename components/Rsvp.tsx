import type { Person, APIErrors, APIResponse, APIPostBody } from '../lib/types';
import React, { useState, useEffect } from 'react';
import RsvpPerson from './RsvpPerson';

const defaultPerson: Person = {
  firstname: null,
  lastname: null,
  email: null,
  attending: true
};

export default function RSVP() {
  const [ errors, setErrors ] = useState<APIErrors>([]);
  const [ success, setSuccess ] = useState<boolean>(false);
  const [ submitting, setSubmitting ] = useState<boolean>(false);
  const [ people, setPeople ] = useState([defaultPerson]);
  const allowRSVPs: boolean = true;

  function addPerson(e) {
    e.preventDefault();
    setPeople([...people, defaultPerson]);
  }

  useEffect(() => {}, [people]);

  async function sendRSVP() {
    setSubmitting(true);
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(people)
    });

    const { errors }: APIResponse = await response.json();

    setSubmitting(false);

    if (response.status !== 200) {
      setErrors(errors || ['Something went wrong.']);
    } else {
      setErrors([]);
      setSuccess(true);
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

    {errors.length > 0 &&
      <div className="form-errors">
        <p>There were some errors in the form!</p>
        <ul>
        {errors.map((error, i) => {
          return <li key={`error_${i}`}>{error}</li>
        })}
        </ul>
      </div>
    }

    {!success &&
      <form className="rsvp-form" onSubmit={sendRSVP}>
        <p>Please RSVP for each individual in your party. You can add more individuals by clicking "add person" below. You can also submit the form separately for each person.</p>
        <p>If you are not attending, please still fill out the form!</p>

        <div className="rsvp-people">

          {people &&
            people.map((person, idx) => {
              return <RsvpPerson person={person} people={people} effect={setPeople} index={idx} />
            })
          }
        </div>

        <div className="field">
          <div className="control">
            <button className="button" onClick={addPerson}>Add person</button>
            <button className="button color-light-bg" style={{ float: 'right' }} onClick={sendRSVP}>{submitting ? "Submitting RSVP ..." : "Submit"}</button>
          </div>
        </div>
      </form>
    }

    {success &&
      <div className="form-response">
        {rsvpData.attending &&
          <p className="has-text-weight-bold">
            ❤️ Hooray! We're thrilled you'll be joining us. We will reach out via email with more details. If you need to submit an RSVP for another person refresh this page and submit again.
          </p>
        }

        {!rsvpData.attending &&
          <p className="has-text-weight-bold">
            ❤️ Bummer! We're sorry you won't be able to make it. If you need to submit an RSVP for another person refresh this page and submit again.
          </p>
        }
      </div>
    }
    </React.Fragment>
  );
}