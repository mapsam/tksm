import RSVP from '../components/Rsvp';
import Block from '../components/Block';

export default function Index() {
  return (
    <div className="content">
      <Block id="RSVP">
        <h1 className="title">RSVP</h1>
        <RSVP />
      </Block>
    </div>
  )
}