import type { LocationItem } from '../lib/types'
import Location from './Location'

export default function LocationGroup({ name, items }) {
  const locationElements = items.map((location: LocationItem) => {
    return <Location info={location} />;
  });

  return (
    <div key={name}>
      <h1>{name}</h1>
      {locationElements}
    </div>
  );
}