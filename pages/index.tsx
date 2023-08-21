import Block from '../components/Block';
import Content from '../components/Content';
import indexImage from '../public/hitched.png';

export default function Index() {
  return (
    <Content
      name="Taylor & Sam are <s>getting</s> married!"
      summary=""
      img={indexImage}>

      <Block id="INFO">
        <h2><strong>
          Saturday August 12th, 2023<br />
          Seattle, WA
        </strong></h2>
        <p>
          Thank you everyone for making our wedding an absolute treat of a weekend. We lost our socks! 
          You can find photos from the photo booth <a href="https://photos.app.goo.gl/hkSHmR8d1EofYWjD9" target="_blank">here</a>. Professional photos will be available in a few weeks.
        </p>
      </Block>
    </Content>
  )
}