import RSVP from '../components/Rsvp';
import Content from '../components/Content';
import Block from '../components/Block';

export default function Index() {
  return (
    <Content name="Répondez S'il Vous Plaît" summary="<strong>Please RSVP by July 1st, 2023!</strong> Please RSVP for each individual in your party whether they are attending or not. You can add more individuals by clicking 'add person' below. You can also submit the form separately for each person. Lastly, a friendly reminder that kids are not invited to the wedding. Sorry for any inconvenience!">
      <Block id="RSVP">
        <RSVP />
      </Block>
    </Content>
  )
}