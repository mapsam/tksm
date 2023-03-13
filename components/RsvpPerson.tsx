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
      <div className="field-pair">
        <div className="field" key={`person-${index}-firstname`}>
          <input className="input" type="text" placeholder="Firstname" onChange={e => update('firstname', e.target.value)} required/>
        </div>

        <div className="field" key={`person-${index}-lastname`}>
          <input className="input" type="text" placeholder="Lastname" onChange={e => update('lastname', e.target.value)} required/>
        </div>
      </div>
    </div>
  )
}
