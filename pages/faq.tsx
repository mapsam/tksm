import Content from '../components/Content';
import Block from '../components/Block';
import faqImage from '../public/sam-taylor-sanjuans.png';

export default function Page() {
  return (
    <Content
      name="FAQ"
      summary="Didn't find your question? You can text Sam @ 651-343-6555 or email @ matthews.sam@gmail.com."
      img={faqImage}>
      <Block id="FAQ">
        <h2>How did we meet?</h2>
        <p>We met as undergrads while attending the University of Wisconsin-Madison. Taylor in a house of 8 "biddies", Sam gratefully sleeping on their couch. Sam moved to Seattle after graduation in 2012, Taylor paid a visit, and the rest is history. We've both lived together in Seattle for nearly a decade.</p>

        <h2>How do I RSVP?</h2>
        <p>Head on over to the <a href="/rsvp">RSVP page</a> and let us know if you can make it!</p>

        <h2>Do you have a registry?</h2>
        <p>We do, kinda. In lieu of <em>stuff</em>, our registry includes a few "funds" that you can contribute to, if you desire. We're not using a third-party registry service because they take a percentage of <em>your</em> money and that doesn't sit well with us.</p>

        <h2>Are kids allowed to the wedding?</h2>
        <p>Nope!</p>

        <h2>Are kids allowed to the other events?</h2>
        <p>Everyone is welcome to the Sunday picnic! We'll just be hanging out in a park and hopefully enjoying some sunshine. The Friday evening event is 21+ only, enforced by the bar.</p>

        <h2>What should I do in Seattle while I'm visiting?</h2>
        <p>We're really excited you want to spend some time in our favorite place! We have a few scheduled events, but really want to give you a chance to explore the place we call home. Check out the <a href="/seattle">Visiting Seattle page</a>, which has a collection of some of our favorite places and must-see Seattle destinations.</p>

        <h2>COVID-19?</h2>
        <p>For the safety of our friends and family we require you to be fully vaccinated at our wedding.</p>

      </Block>
    </Content>
  )
}