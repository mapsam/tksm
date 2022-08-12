import type { LocationItem } from '../lib/types'

import locations from '../lib/locations';

// interface LocationProps {
//   name: string,
//   description: string,
//   time?: string,
//   address?: string
// }

import Location from './Location'

export default function LocationGroup({ group }) {
  const locationElements = locations[group].map((location: LocationItem) => {
    return <Location
      name={location.name}
      description={location.description}
      address={location.address}
    />;
  });

  return (
    <div>
      <h1>{group}</h1>
      {locationElements}
    </div>
  );
}