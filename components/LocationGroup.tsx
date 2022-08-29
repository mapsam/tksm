import type { LocationItem } from '../lib/types'

import locations from '../lib/locations';
import Location from './Location'

export default function LocationGroup({ group }) {
  const locationElements = locations[group].map((location: LocationItem) => {
    return <Location info={{...location, ...{group}}} />;
  });

  return (
    <div>
      {locationElements}
    </div>
  );
}