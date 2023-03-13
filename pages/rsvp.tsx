import RSVP from '../components/Rsvp';
import Content from '../components/Content';
import Block from '../components/Block';

export default function Index() {
  return (
    <Content name="Répondez S'il Vous Plaît" summary="<strong>Please RSVP by July 1st, 2023!</strong> RSVP for each individual in your party whether they are attending or not. A friendly reminder that kids are not invited to the wedding. We hope to see you there!">
      <Block id="RSVP">
        <RSVP />
      </Block>
    </Content>
  )
}