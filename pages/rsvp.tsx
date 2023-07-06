import RSVP from '../components/Rsvp';
import Content from '../components/Content';
import Block from '../components/Block';

export default function Index() {
  return (
    <Content name="Répondez S'il Vous Plaît" summary="<strong>RSVPs closed on July 1st!</strong> If you have any questions reach out to Sam & Taylor. Can't wait to see you all!">
      <Block id="RSVP">
        <RSVP />
      </Block>
    </Content>
  )
}