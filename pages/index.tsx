import RSVP from '../components/Rsvp';
import Block from '../components/Block';
import { useState } from 'react';

export default function Index() {
  const [ showImage, setShowImage ] = useState<boolean | null>(true);

  return (
    <div className="content">
      <Block id="TITLE">
        <h1 className="title">Taylor &amp; Sam<br />are getting married!</h1>

        <div
          className="title-image-container"
          onMouseEnter={() => setShowImage(false)}
          onMouseLeave={() => setShowImage(true)}
          onTouchStart={() => setShowImage(false)}
          onTouchEnd={() => setShowImage(true)}
          onTouchCancel={() => setShowImage(true)}>
          <div className="title-image" style={{ backgroundImage: `url('/title-laugh.png')`}}></div>
          {showImage && <div className="title-image" style={{ backgroundImage: `url('/title-smile.png')`}}></div> }
        </div>
      </Block>

      <Block id="INFO" backgroundClass='color-gray-bg'>
        <p><strong>
          Saturday August 12th, 2023<br />
          Seattle, WA
        </strong></p>
        <p>
          We couldn't be more excited to host our friends and family out here in the Pacific Northwest,
          a place we've called home for more than a decade. We'll have great food, cold drinks, and
          enough live music to lose your socks.
        </p>
      </Block>

      <Block id="SCHEDULE">
        <h1>
          Schedule
        </h1>

        <div className="event">
        <div className="dot purple-2-bg"></div>
          <h2>Friday, August 11<sup>th</sup> - Traveler's shindig</h2>
          <p>
            Time: 6pm - 9pm<br />
            Location: TBD
          </p>
          <p>
            Casual evening for those traveling from out of town.
            Say hi to the Matthews/Varner &amp; Kelleher/Stuecker families,
            grab a drink and a bite, and meet some of our favorite locals.
          </p>
        </div>

        <div className="event">
        <div className="dot purple-3-bg"></div>
          <h2>Saturday, August 12th - Wedding day!</h2>
          <p>
            Time: 5pm - Midnight<br />
            Location: Metropolist<br />
            Address: <a href="https://goo.gl/maps/3raqone4uzQdv3dQA" target="_blank">2931 First Ave. South, Suite A, Seattle, WA</a>
          </p>
          <p>
            We're getting married in Seattle's SODO district.
            We'll have a quick ceremony, food trucks, open bar, and games galore.
            Cap off the night with Eldridge Gravy and the Court Supreme,
            our favorite local funk band.
          </p>
                  {/* <p>
          5 - 6pm: Arrive and grab a beverage before the ceremony. Check out nearby Seapine Brewery
          or Westland Distillery beforehand if you're interested in some local libations.
        </p>
        <p>
          6 - 6:30pm: Ceremony. Grab a seat and share some smiles.
        </p>
        <p>
          6 - 7pm: Appetizers and happy hour.
        </p>
        <p>
          7 - 8:30pm: Dinner in the form of a taco and ____ food truck. No assigned tables, just
          grab a taco, a friend, and talk to an uncle.
        </p>
        <p>
          9 - 11pm: Our favorite Seattle funk band, <a href="https://www.eldridgegravy.com/" target="_blank">Eldridge Gravy &amp;
          The Court Supreme</a> will take us on a groovy journey into the evening.
        </p>*/}
        </div>

        <div className="event">
          <div className="dot purple-2-bg"></div>
          <h2>Sunday, August 13th - Picnic</h2>
          <p>
            Time: 10am - 1pm<br />
            Location: TBD<br />
          </p>
          <p>
            Last chance to hug that uncle of yours. Come grab coffee and a baked good in one of Seattle's lovely parks, get some fresh air, and bid farewell to the newlyweds.
          </p>
        </div>
      </Block>

      <Block id="ACCOMODATIONS" style={{ backgroundColor: '#f6f6f6' }}>
        <h1>Accommodations</h1>
        <p>No matter where you stay, we recommend booking accomodations as soon as possible. August in Seattle is prime outdoor and cruise season.</p>

        <h2>Hotel Block</h2>
        <p>
          For those traveling from out of town, <strong><a href="https://www.wac.net/stay-at-the-inn/reservations/" target="_blank">The Inn at the Washington Athletic Club (WAC)</a></strong> is offering us special rates for our wedding weekend. Located in downtown Seattle and
          above the historic athletic club, you'll have access to beautiful rooms, the spa, and a
          variety of lounges and restaurants.
        </p>
        <p>
          How to book: TBD<br />
          The special rate is applicable before and after the wedding event dates.
        </p>

        <h2>Neighborhoods</h2>
        <p>The urban villages of Seattle are what really make this city shine. We strongly recommend finding a spot for you and your crew to share with Airbnb or VRBO, it's likely the more affordable option, especially if you plan to extend your trip.</p>
        <p>Some neighborhood recommendations:</p>
        <ul>
          <li><a href="https://www.airbnb.com/s/Capitol-Hill--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Capitol%20Hill%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Capitol Hill</a>: feeling hip? feeling youthful? This is your place! Capitol Hill offers infinite coffee shops, bars, and world class restaurants. Connected to the lightrail from the airport.</li>
          <li><a href="https://www.airbnb.com/s/Fremont--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Fremont%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Fremont</a>: the self-proclaimed center of the universe now-turned Googletopia. Find the Fremont Troll, Theo's Chocolate, and enjoy life on the canal.</li>
          <li><a href="https://www.airbnb.com/s/Wallingford--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Wallingford%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Wallingford</a>: The neighborhood where Taylor and Sam first lived together! 45th street offers food, shops, and bars. Near the Zoo and sits along I-5 for quick access to downtown and other neighborhoods.</li>
          <li><a href="https://www.airbnb.com/s/Columbia-City--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Columbia%20City%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Columbia City &amp; Mt. Baker</a>: Along the lightrail, loaded with restaurants, and near Seward Park, which offers miles of hiking and views of Lake Washington. Just a small hop west to the wedding venue.</li>
        </ul>

        <h2>Alternative hotels</h2>
        <p>
          If the hotel block is no longer available or you'd like to look at some other hotels in the downtown area.
        </p>
        <ul>
          <li><a href="https://www.sonesta.com/royal-sonesta/wa/seattle/alexis-royal-sonesta-hotel-seattle/" target="_blanke">Hotel Alexis</a></li>
          <li><a href="https://hotelandra.com/" target="_blank">Hotel Andra</a></li>
          <li><a href="https://www.expedia.com/Seattle-Hotels-Motif-Seattle.h50947.Hotel-Information" target="_blank">Motif (Hyatt)</a></li>
        </ul>
      </Block>

      <Block id="RSVP">
        <h1>RSVP</h1>
        <RSVP />
      </Block>

      <Block id="FAQ" backgroundClass="color-white-bg">
        <h1>Frequently Asked Questions</h1>

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

        <h2>More questions?</h2>
        <p>You can text Sam @ 651-343-6555 or email @ matthews.sam@gmail.com.</p>
      </Block>
    </div>
  )
}