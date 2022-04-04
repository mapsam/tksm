import Image from 'next/image';
import img from '../public/circle.png';

export default function Nav() {
  return (
    <div className="nav has-text-centered">
      <Image
        src={img}
        alt="Sam and Taylor at a friend's wedding"
        width={200}
        height={200}
      />

      <section>
        <a href="#INFO" className="mx-4">Event Info</a>
        <a href="#REGISTRY" className="mx-4">Registry</a>
        <a href="#RSVP" className="mx-4">RSVP</a>
        <a href="#FAQ" className="mx-4">FAQ</a>
      </section>
    </div>
  );
}