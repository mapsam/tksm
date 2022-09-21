import type { Person } from '../lib/types';

export default function RsvpPerson({ person, people, effect, index }: { person: Person, people: Array<Person>, effect: Function, index: any }) {
  function update(field: string, val: any) {
    const updatedPerson: Person = { ...person, ...{ [field]: val }};
    const newPeople: Array<Person> = [...people];
    newPeople[index] = updatedPerson;
    effect(newPeople);
  }

  return (
    <div className="rsvp-person" key={`person-${index}`}>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Firstname" onChange={e => update('firstname', e.target.value)} required/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Lastname" onChange={e => update('lastname', e.target.value)} required/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" onChange={e => update('email', e.target.value)} required/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input type="radio" id={`attending-yes-${index}`} name={`attending-${index}`} onChange={e => update('attending', true)} required/>
          <label htmlFor={`attending-yes-${index}`}>Attending ☺️</label>
          <input type="radio" id={`attending-no-${index}`} name={`attending-${index}`} onChange={e => update('attending', false)} required/>
          <label htmlFor={`attending-no-${index}`}>Not attending 😢</label>
        </div>
      </div>
    </div>
  )
}
