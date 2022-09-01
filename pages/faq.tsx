import Content from '../components/Content';
import Block from '../components/Block';

export default function Page() {
  return (
    <Content
      name="FAQ"
      summary="Didn't find your question? You can text Sam @ 651-343-6555 or email @ matthews.sam@gmail.com.">
      <Block id="FAQ">
        <h2>How did we meet?</h2>
        <p>We met as undergrads while attending the University of Wisconsin-Madison. Taylor in a house of 8 "biddies", Sam gratefully sleeping on their couch. Sam moved to Seattle after graduation in 2012, Taylor paid a visit, and the rest is history. We've both lived together in Seattle for nearly a decade.</p>

        <h2>Are kids allowed to the wedding?</h2>
        <p>Nope!</p>

        <h2>What should I do in Seattle while I'm visiting?</h2>
        <p>We're really excited you want to spend some time in our favorite place! We have a few scheduled events, but really want to give you a chance to explore the place we call home. Check out the <a href="/seattle">Visiting Seattle page</a>, which has a collection of some of our favorite places and must-see Seattle destinations.</p>

        <h2>COVID-19?</h2>
        <p>For the safety of our friends and family we require you to be fully vaccinated at our wedding.</p>

        <h2>How do I RSVP?</h2>
        <p>In late Spring 2023 we'll send emails to have you digitally RSVP for the wedding. Know you can't make it? That's a shame! Feel free to let us know in advance by texting Sam @ 651-343-6555.</p>
      </Block>
    </Content>
  )
}