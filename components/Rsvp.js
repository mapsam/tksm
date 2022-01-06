import React from 'react';

export default function RSVP() {
  return (
    <React.Fragment>
    <p>Each individual should fill out this form by <span className="is-underlined">January 1st, 2023</span>! If you need to submit for more than once person, refresh the page and submit again.</p>
    <form>
      <div className="field">
        <label className="label">Firstname</label>
        <div className="control">
          <input className="input" type="text" placeholder=""></input>
        </div>
      </div>

      <div className="field">
        <label className="label">Lastname</label>
        <div className="control">
          <input className="input" type="text" placeholder=""></input>
        </div>
      </div>

      <div className="field">
        <label className="label">RSVP</label>
        <div className="control">
            <label className="radio is-size-5 mr-3">
              <input className="mr-2" type="radio" name="question"></input>
              Attending ☺️
            </label>
            <label className="radio is-size-5 mr-3">
              <input className="mr-2" type="radio" name="question"></input>
              Not attending 😢
            </label>
        </div>
      </div>

      <div className="field">
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
      </div>

      <div class="field">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div> 

        {/* <div className="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>
        <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
        <label class="label">Subject</label>
        <div class="control">
            <div class="select">
            <select>
                <option>Select dropdown</option>
                <option>With options</option>
            </select>
            </div>
        </div>
        </div>

        <div class="field">
        <label class="label">Message</label>
        <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
        </div>

        <div class="field">
        <div class="control">
            <label class="checkbox">
            <input type="checkbox">
            I agree to the <a href="#">terms and conditions</a>
            </label>
        </div>
        </div>

        <div class="field">
        <div class="control">
            <label class="radio">
            <input type="radio" name="question">
            Yes
            </label>
            <label class="radio">
            <input type="radio" name="question">
            No
            </label>
        </div>
        </div>

        <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button class="button is-link is-light">Cancel</button>
        </div>
        </div> */}
    </form>
    </React.Fragment>
  );
}