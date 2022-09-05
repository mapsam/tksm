import type { LocationItem } from '../lib/types';

export default function Location({ info }: { info: LocationItem }) {
  const mapUri = info.maps || `https://www.google.com/maps/place/${encodeURIComponent(info.maps)}`;

  return (
    <div key={info.name} id={info.name} className="location">
      <p>
        <strong>{info.name}</strong>
        <br />
        {info.description} ({info.link && <a href={info.link} target='_blank'>website</a>})
      </p>

      <div className="location-metadata">
        {info.neighborhood} &bull; {info.group} &bull; <a href={mapUri} target='_blank'>{info.address && info.address}</a>
      </div>
    </div>
  );
}