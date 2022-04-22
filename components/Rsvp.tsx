import type { APIPostRequest, APIErrors, APIResponse } from '../lib/types';
import React, { useState } from 'react';

export default function RSVP() {
  const [ rsvpData, setRsvpData ] = useState<APIPostRequest>({});
  const [ errors, setErrors ] = useState<APIErrors>([]);
  const [ success, setSuccess ] = useState<boolean>(false);
  const [ submitting, setSubmitting ] = useState<boolean>(false);

  function update(key: string, val: any) {
    const d: APIPostRequest = { ... rsvpData };
    d[key] = val;
    setRsvpData(d);
  }

  async function sendRSVP() {
    setSubmitting(true);
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rsvpData)
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

  return (
    <React.Fragment>

    {errors.length > 0 &&
      <div className="box has-background-danger has-text-white">
        <p>There were some errors in the form!</p>
        <ul>
        {errors.map((error, i) => {
          return <li key={`error_${i}`}>{error}</li>
        })}
        </ul>
      </div>
    }

    {!success &&
      <form onSubmit={sendRSVP}>
        <div className="field">
          <label className="label">Firstname</label>
          <div className="control">
            <input className="input" type="text" placeholder="" onChange={e => update('firstname', e.target.value)}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">Lastname</label>
          <div className="control">
            <input className="input" type="text" placeholder="" onChange={e => update('lastname', e.target.value)}></input>
          </div>
        </div>

        <div className="field">
          <label className="label">RSVP</label>
          <div className="control">
              <label className="radio is-size-5 mr-3">
                <input className="mr-2" type="radio" name="question" onChange={e => update('attending', true)}></input>
                Attending ☺️
              </label>
              <label className="radio is-size-5 mr-3">
                <input className="mr-2" type="radio" name="question" onChange={e => update('attending', false)}></input>
                Not attending 😢
              </label>
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="" onChange={e => update('email', e.target.value)}></input>
          </div>
        </div>

        {/* <div className="field">
          <label className="label">Food option</label>
          <div className="control">
              <div className="select">
              <select>
                  <option>Select one...</option>
                  <option>Meat</option>
                  <option>Vegetarian</option>
                  <option>Vegan</option>
                  <option>GF</option>
              </select>
              </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Vaccination confirmation</label>
          <div className="control">
            <label className="checkbox is-size-5">
              <input className="mr-2" type="checkbox"></input>
              I am vaccinated for COVID-19 👍
            </label>
          </div>
        </div>

        <div className="field">
          <label className="label">Secret phrase</label>
          <div className="control">
            <input className="input" type="text" placeholder=""></input>
          </div>
        </div> */}

        <div className="field">
          <div className="control">
            <button className={submitting ? "button is-primary is-size-5 is-loading" : "button is-primary is-size-5"} onClick={sendRSVP}>Submit</button>
          </div>
        </div>
      </form>
    }

    {success &&
      <div className="box has-background-info has-text-white">
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