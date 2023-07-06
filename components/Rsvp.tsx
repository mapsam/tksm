import type { Person, APIErrors, APIResponse, APIPostBody } from '../lib/types';
import React, { useState, useEffect, SyntheticEvent } from 'react';
import Image from 'next/image';
import RsvpPerson from './RsvpPerson';
import RsvpAttendance from './RsvpAttendance';
import PhoneInput from 'react-phone-number-input/input';

// import 'react-phone-number-input/style.css';

const defaultPerson: Person = {
  firstname: 'Person',
  lastname: '1',
  attendingFriday: 'yes',
  attendingSaturday: 'yes',
  attendingSunday: 'yes'
};

export default function RSVP() {
  const [ success, setSuccess ] = useState<null|APIPostBody>(null);
  const [ errors, setErrors ] = useState<APIErrors>([]);
  const [ submitting, setSubmitting ] = useState<boolean>(false);
  const [ numPeople, setNumPeople ] = useState(1);
  const [ people, setPeople ] = useState([defaultPerson]);
  const [ infoPhone, setInfoPhone ] = useState(null);
  const [ infoEmail, setInfoEmail ] = useState(null);
  const [ infoRestrictions, setInfoRestrictions ] = useState(null);
  const [ infoAccommodations, setInfoAccommodations ] = useState(null);
  const [ infoWords, setInfoWords ] = useState(null);
  const allowRSVPs: boolean = false;

  useEffect(() => {}, [people]);
  useEffect(() => {
    const peeps = [];
    for (let i = 0; i < numPeople; i++) {
      const merged = {
        ...defaultPerson,
        ...{
          lastname: i + 1
        },
        ...people[i] || {}
      }
      peeps.push(merged);
    }
    setPeople(peeps);
  }, [numPeople]);

  async function sendRSVP(e: SyntheticEvent) {
    e.preventDefault();
    setSubmitting(true);

    const body: APIPostBody = {
      people,
      phone: infoPhone,
      email: infoEmail,
      restrictions: infoRestrictions,
      accommodations: infoAccommodations,
      words: infoWords
    };

    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
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
      <Image src="/cant-wait.gif" width="300" height="300" />
    )
  }

  return (
    <React.Fragment>

    {!success &&
      <form className="rsvp-form" onSubmit={sendRSVP}>
        <div className="field form-counter" key="person-count">
          <h2>How many people are you RSVP'ing for?</h2>
          <select name="" onChange={e => setNumPeople(parseInt(e.target.value))}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="rsvp-people" key="rsvp-form-people">
          {people &&
            people.map((person, idx) => {
              return <RsvpPerson person={person} people={people} effect={setPeople} index={idx} />
            })
          }
        </div>

        <div>
          <h2>Contact information</h2>
          <p>Primary contact for the person/people above. We'll use this information in case we need to reach out to you for questions.</p>
          <div className="field-pair">
            <div className="field" key='contact-info-phone'>
              <PhoneInput
                placeholder="Phone"
                value={infoPhone}
                defaultCountry="US"
                country="US"
                onChange={setInfoPhone}
                rules={{ required: false }} />
            </div>

            <div className="field" key='contact-info-email'>
              <input className="input" type="email" autoCorrect="off" autoCapitalize="none" onChange={(e) => setInfoEmail(e.target.value)} placeholder="Email" required/>
            </div>
          </div>
        </div>

        <div>
          <h2>Event attendance</h2>
          <p>Will you be attending the wedding and any other events? Your submissions for Friday and Sunday just help us get a head count so we can prepare. If your plans change, no worries! Check out the <a href="/schedule" target="_blank">schedule page</a> for more details.</p>
        </div>

        {people.length &&
          <div>
            <p><i>Traveler's shindig</i> - Friday August 11th @ Optimism Brewery, 4pm - 7pm. For those traveling from out of town. Kid friendly.</p>
            {
              people.map((person, idx) => {
                return <RsvpAttendance person={person} people={people} effect={setPeople} index={idx} field='attendingFriday' />
              })
            }
          </div>
        }

        {people.length &&
          <div>
            <p><i>Ceremony & reception</i> - Saturday August 12th @ Metropolist, 5pm - 11pm.</p>
            {
              people.map((person, idx) => {
                return <RsvpAttendance person={person} people={people} effect={setPeople} index={idx} field='attendingSaturday' />
              })
            }
          </div>
        }

        {people.length &&
          <div>
            <p><i>Sunday picnic</i> - Sunday August 13th @ Gasworks Park, 10am - 12:00pm. Everyone welcome, including kids.</p>
            {
              people.map((person, idx) => {
                return <RsvpAttendance person={person} people={people} effect={setPeople} index={idx} field='attendingSunday' />
              })
            }
          </div>
        }

        <div>
          <h2>Additional information (optional)</h2>
          <p>Dietary restrictions? We will have meat and vegetarian options available. Let us know if any of your party has further restrictions. We'll make sure everyone can eat.</p>
          <div className="field" key='dietary-restrictions'>
            <input className="input" type="text" onChange={(e) => setInfoRestrictions(e.target.value) } placeholder="Dietary restrictions" />
          </div>

          <p>Where are you planning to stay? If you aren't sure yet, that's okay!</p>
          <div className="field" key='accommodations'>
            <input className="input" type="text" onChange={(e) => setInfoAccommodations(e.target.value) } placeholder="Where are you staying?" />
          </div>

          <p>Words of widsom for the bride and groom?</p>
          <div className="field" key='words-of-wisdom'>
            <input className="input" type="text" onChange={(e) => setInfoWords(e.target.value) } placeholder="..." />
          </div>
        </div>

        <div className="field" key="rsvp-form-buttons">
          <div className="control">
            <input type="submit" className="button" value={submitting ? "Submitting RSVP ..." : "Submit"} />
          </div>
        </div>
      </form>
    }

    {errors.length > 0 && !success &&
      <div className="form-errors color-red-bg">
        <p className="color-light">There were some errors in the form!</p>
        <ul>
        {errors.map((error, i) => {
          return <li className="color-light" key={`error_${i}`}>{error}</li>
        })}
        </ul>
      </div>
    }

    {success &&
      <div className="form-response">
        <p className="has-text-weight-bold">
          ❤️ Thanks! If you're attending, we're thrilled! If you can't, we get it. We'll miss you! Here's the information we got:
        </p>
        {success.people.map((p: Person) => {
          return <p className="mono">{p.firstname} {p.lastname}, Friday ({p.attendingFriday}) Saturday ({p.attendingSaturday}) Sunday ({p.attendingSunday})</p>
        })}
        {success.phone &&
          <p className="mono">Phone: {success.phone}</p>
        }
        {success.email &&
          <p className="mono">Email: {success.email}</p>
        }
        {success.restrictions &&
          <p className="mono">Restrictions: {success.restrictions}</p>
        }
        <p>If this information looks correct, you're all set. If you need to make a change, text Sam @ 651-343-6555. If you need to submit more RSVPs, refresh the page. Make sure to book your <a href="/accommodations">accommodations</a> if you haven't! If you're up for it, have a look at the <a href="/registry">registry</a>.</p>
      </div>
    }
    </React.Fragment>
  );
}