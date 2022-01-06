import React, { useState } from 'react';

export default function RSVP() {
  const [ data, setData ] = useState({});
  const [ error, setError ] = useState(null);

  function update(key, val) {
    const d = { ... data };
    d[key] = val;
    setData(d);
  }

  async function sendRSVP(e) {
    e.preventDefault();    
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
  }

  return (
    <React.Fragment>
    <p>Each individual should fill out this form by <span className="is-underlined">January 1st, 2023</span>! If you need to submit for more than once person, refresh the page and submit again.</p>
    <p>{error}</p>
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

      {/* <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="text" placeholder=""></input>
        </div>
      </div>

      <div className="field">
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

      <div class="field">
        <div class="control">
          <button class="button is-primary is-size-5" onClick={sendRSVP}>Submit</button>
        </div>
      </div> 
    </form>
    </React.Fragment>
  );
}