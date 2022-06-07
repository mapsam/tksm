import RSVP from '../components/Rsvp';
import Block from '../components/Block';

export default function Index() {

  return (
    <div className="content">
      <Block id="TITLE">
        <h1 className="title">Taylor &amp; Sam<br />are getting married!</h1>
        {/* <p>August 12th, 2023 – Seattle, WA</p> */}

        <div className="title-image"></div>
      </Block>

      <Block id="INFO" style={{ backgroundColor: '#DEEFE7' }}>
        <p>
          We couldn't be more excited to host our friends and family out here in the Pacific Northwest,
          a place we've called home for more than a decade. We'll have great food, cold drinks, and
          enough live music to lose your socks.
        </p>
        <p>
          Saturday August 12th, 2023<br />
          Seattle, WA
        </p>
      </Block>

      <Block id="SCHEDULE">
        <h1>
          Schedule
        </h1>

        <div className="event">
          <div className="dot blue"></div>
          <div className="dot2 blue"></div>
          <h2>Friday, August 11<sup>th</sup> - Out-of-towner's shindig</h2>
          <p>
            Time: 6pm - 9pm<br />
            Location: TBD
          </p>
          <p>
            Casual evening for those traveling from out of town.
            Say hi to the Matthews/Varner and Kelleher/Stuecker families,
            grab a drink and a bite, and meet some of our favorite locals.
          </p>
        </div>

        <div className="event">
          <div className="dot green"></div>
          <div className="dot2 green"></div>
          <h2>Saturday, August 12th - Wedding day!</h2>
          <p>
            Time: 5pm - Midnight<br />
            Location: Metropolist<br />
            Address: <a href="https://goo.gl/maps/3raqone4uzQdv3dQA" target="_blank">2931 First Ave. South, Suite A, Seattle, WA</a>
          </p>
          <p>
            We're getting married in Seattle's SODO district.
            We'll have a quick ceremony, food trucks, open bar, and games galore.
            Cap off the night with Eldridge Gravy And The Court Supreme,
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
          <div className="dot yellow"></div>
          <div className="dot2 yellow"></div>
          <h2>Sunday, August 13th - Brunch</h2>
          <p>
            Time: 11am - 1pm<br />
            Location: TBD<br />
          </p>
          <p>
            We'll be hosting a casual brunch and enjoying the weather, rain or shine. Last chance to hug that uncle of yours.
          </p>
        </div>
      </Block>

      <Block id="ACCOMODATIONS" style={{ backgroundColor: '#fef2f7' }}>
        <h1>Accommodations</h1>
        <p>
          There is no official hotel block for our wedding.
          With no obvious hotel location near the venue, we encourage everyone
          to find accomodations that allows you to holistically enjoy
          your visit to Seattle.</p>
        <p>
          However, we do have some hotel and neighborhood recommendations:
        </p>

        <h2>Hotels</h2>
        <ul>
          <li><a href="https://www.sonesta.com/royal-sonesta/wa/seattle/alexis-royal-sonesta-hotel-seattle/" target="_blanke">Hotel Alexis</a>: boutique hotel on 1st Avenue in downtown Seattle. Within walking distance to Pike Market.</li>
          <li><a href="https://hotelandra.com/" target="_blank">Hotel Andra</a>: sophisticated boutique hotel in the heart of downtown Seattle. Near Pike Place Market, retail core, and many lovely restaurants.</li>
          <li><a href="https://www.expedia.com/Seattle-Hotels-Motif-Seattle.h50947.Hotel-Information" target="_blank">Motif (Hyatt)</a>: downtown.</li>
        </ul>

        <h2>Neighborhoods</h2>
        <p>If you plan to book an Airbnb / VRBO we have some neighborhood recommendations. (you really should, it's the best way to see the area!)</p>
        <ul>
          <li><a href="https://www.airbnb.com/s/Capitol-Hill--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Capitol%20Hill%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Capitol Hill</a>: feeling hip? feeling youthful? This is your place! Capitol Hill offers infinite coffee shops, bars, and world class restaurants. Connected to the lightrail from the airport.</li>
          <li><a href="https://www.airbnb.com/s/Fremont--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Fremont%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Fremont</a>: the self-proclaimed center of the universe now-turned Googletopia. Find the Fremont Troll, Theo's Chocolate, and enjoy life on the canal.</li>
          <li><a href="https://www.airbnb.com/s/Wallingford--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Wallingford%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Wallingford</a>: The neighborhood where Taylor and Sam first lived together! 45th street offers food, shops, and bars. Near the Zoo and sits along I-5 for quick access to downtown and other neighborhoods.</li>
          <li><a href="https://www.airbnb.com/s/Columbia-City--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Columbia%20City%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Columbia City &amp; Mt. Baker</a>: Along the lightrail, loaded with restaurants, and near Seward Park, which offers miles of hiking and views of Lake Washington. Just a small hop west to the wedding venue.</li>
        </ul>
      </Block>

      <Block id="RSVP" style={{ backgroundImage: `url("/bg-watercolor.webp")`, backgroundRepeat: 'repeat' }}>
        <h1>RSVP</h1>
        <RSVP />
      </Block>

      <Block id="FAQ">
        <h1>Frequently Asked Questions</h1>
        <p>Have a question that isn't listed? Text us at 651-343-6555. We'll add and amend as people ask :)</p>

        <h2>Are kids allowed?</h2>
        <p>Nope!</p>

        <h2>COVID-19?</h2>
        <p>To keep us all safe we require you to be fully vaccinated at our wedding.</p>

        <h2>What should I do in Seattle while I'm visiting?</h2>
        <p>We're really excited you want to spend some time in our favorite place. Check out our "visiting Seattle" page, which has </p>

        <h2>How did we meet?</h2>
        <p>Taylor and Sam met while attending the University of Wisconsin-Madison.</p>
      </Block>
    </div>
  )
}