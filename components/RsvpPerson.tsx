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
      <p><strong>Person {index + 1}</strong></p>
      <div className="field-pair">
        <div className="field" key={`person-${index}-firstname`}>
          <input className="input" type="text" placeholder="Firstname" onChange={e => update('firstname', e.target.value)} required/>
        </div>

        <div className="field" key={`person-${index}-lastname`}>
          <input className="input" type="text" placeholder="Lastname" onChange={e => update('lastname', e.target.value)} required/>
        </div>
      </div>

      <div className="field-pair">
        <div className="field" key={`person-${index}-email`}>
          <input className="input" type="text" placeholder="Email" onChange={e => update('email', e.target.value)} />
        </div>

        <div className="field" key={`person-${index}-diet`}>
          <input className="input" type="text" placeholder="Dietary restrictions" onChange={e => update('diet', e.target.value)} />
        </div>
      </div>

      <div className="field" key={`person-${index}-attending`}>
        <input type="radio" key={`person-${index}-attending-yes`} id={`attending-yes-${index}`} name={`attending-${index}`} onChange={e => update('attending', true)} required/>
        <label htmlFor={`attending-yes-${index}`}>Attending ☺️</label>
        <input type="radio" key={`person-${index}-attending-no`} id={`attending-no-${index}`} name={`attending-${index}`} onChange={e => update('attending', false)} required/>
        <label htmlFor={`attending-no-${index}`}>Not attending 😢</label>
      </div>
    </div>
  )
}
