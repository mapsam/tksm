import RSVP from '../components/Rsvp';
import Content from '../components/Content';
import Block from '../components/Block';

export default function Index() {
  return (
    <Content name="Répondez S'il Vous Plaît">
      <Block id="RSVP">
        <RSVP />
      </Block>
    </Content>
  )
}