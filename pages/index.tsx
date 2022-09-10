import Block from '../components/Block';
import Content from '../components/Content';
import indexImage from '../public/title-smile-sized.png';
import hoverImage from '../public/title-laugh-sized.png';

export default function Index() {
  return (
    <Content
      name="Taylor & Sam are getting married!"
      summary=""
      img={indexImage}
      imgHover={hoverImage}>

      <Block id="INFO">
        <h2><strong>
          Saturday August 12th, 2023<br />
          Seattle, WA
        </strong></h2>
        <p>
          We couldn't be more excited to host our friends and family out here in the Pacific Northwest,
          a place we've called home for more than a decade. We'll have great food, cold drinks, and
          enough live music to lose your socks.
        </p>
        <p>
          RSVPs will be made available in early spring 2023. Until then, view the <a href="/schedule">schedule</a>, book your <a href="/accomodations">accomodations</a> and learn more about <a href="/seattle">traveling to Seattle</a>.
        </p>
        <p>Have a question? Check out the <a href="/faq">FAQ</a> page.</p>
        <p>Warmly,<br />
           Sam &amp; Taylor</p>
      </Block>
    </Content>
  )
}