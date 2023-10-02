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
        <p>
          Thank you everyone for making our wedding an absolute treat of a weekend. We lost our socks!
        </p> 
        <h2>Photos</h2>
        <p> 
          You can find photos from the photo booth <a href="https://photos.app.goo.gl/hkSHmR8d1EofYWjD9" target="_blank">here</a>. Photos from our photographer are below. If these are shared on social media please tag @ronnyandrene!
        </p>
        <ul>
          <li><a href="https://photos.app.goo.gl/i2sQcVUHsUvDCes3A" target="_blank">Pre-Ceremony</a></li>
          <li><a href="https://photos.app.goo.gl/yVfXCbe3nrxesufy7" target="_blank">Ceremony</a></li>
          <li><a href="https://photos.app.goo.gl/u27PMhYa7eio6zYT8" target="_blank">Couple Photos</a></li>
          <li><a href="https://photos.app.goo.gl/kNJfnrfwzNm6W7qq9" target="_blank">Family & Friends</a></li>
          <li><a href="https://photos.app.goo.gl/eiqg9Vxuezg3bgtA7" target="_blank">Reception</a></li>
        </ul>
      </Block>
    </Content>
  )
}