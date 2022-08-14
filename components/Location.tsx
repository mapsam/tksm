interface LocationProps {
  name: string,
  description: string,
  time?: string,
  address?: string,
  neighborhood?: string,
  link?: string
}

export default function Location({ info }: { info: LocationProps }) {
  return (
    <div id={info.name} className="location">
      <p>
        <strong>{info.name}</strong>
        <br />
        {info.description} {info.link && <a href={info.link} target='_blank'>(more info)</a>}
      </p>

      <div className="location-metadata">
      {info.neighborhood && info.neighborhood} &bull; <a href={`https://www.google.com/maps/place/${encodeURIComponent(info.address)}`} target='_blank'>{info.address && info.address}</a>

      </div>
    </div>
  );
}