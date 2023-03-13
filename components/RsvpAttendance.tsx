import type { Person } from '../lib/types';
import { useState } from 'react';

const optionBackgroundColors = {
  'yes': 'color-light-bg',
  'no': 'color-light-red-bg',
  'maybe': 'color-white-bg'
};

interface RsvpPersonArgs {
  person: Person,
  people: Array<Person>,
  effect: Function,
  index: any,
  field: string
}

export default function RsvpPerson({ person, people, effect, index, field }: RsvpPersonArgs) {
  const [ optionBackground, setOptionBackground ] = useState(optionBackgroundColors['yes']);

  function update(val: any) {
    setOptionBackground(optionBackgroundColors[val]);
    const updatedPerson: Person = { ...person, ...{ [field]: val }};
    const newPeople: Array<Person> = [...people];
    newPeople[index] = updatedPerson;
    effect(newPeople);
  }

  return (
    <div className="person-attendance">
      <label className="mono person-attendance-name">{person.firstname} {person.lastname}</label>
      <select name="" className={optionBackground} onChange={(e) => update(e.target.value)}>
        <option value="yes" className="color-medium-bg">yes</option>
        <option value="no" className="color-medium-bg">no</option>
        <option value="maybe" className="color-medium-bg">maybe</option>
      </select>
    </div>
  );
}


