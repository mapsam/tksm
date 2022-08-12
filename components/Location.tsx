interface LocationProps {
  name: string,
  description: string,
  time?: string,
  address?: string
}

export default function Location(props: LocationProps) {
  return (
    <div id={props.name} className="location">
      <p>
        <strong>{props.name}</strong>
        <br />
        {props.description}
      </p>

      <div className="location-metadata">
        {props.address && props.address}
      </div>
    </div>
  );
}