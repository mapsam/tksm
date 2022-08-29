import Block from '../components/Block';

export default function Page() {
  return (
    <div className="content">
      <Block id="ACCOMODATIONS">
        <h1 className="title">Accomodations</h1>
        <p>No matter where you stay, we recommend booking accomodations as soon as possible. August in Seattle is prime outdoor and cruise season.</p>
      </Block>

      <Block id="HOTEL-BLOCK" style={{ backgroundColor: '#F2F0F2' }}>
        <h1>Hotel Block</h1>
        <p>
          For those traveling from out of town, <strong><a href="https://www.wac.net/stay-at-the-inn/reservations/" target="_blank">The Inn at the Washington Athletic Club (WAC)</a></strong> is offering us special rates for our wedding weekend. Located in downtown Seattle and
          above the historic athletic club, you'll have access to beautiful rooms, the spa, and a
          variety of lounges and restaurants.
        </p>
        <p>
          How to book: TBD<br />
          The special rate is applicable before and after the wedding event dates.
        </p>
      </Block>

      <Block id="NEIGHBORHOODS" style={{ backgroundColor: '#F2F0F2' }}>
        <h1>Neighborhoods</h1>
        <p>The urban villages of Seattle are what really make this city shine. We strongly recommend finding a spot for you and your crew to share with Airbnb or VRBO, it's likely the more affordable option, especially if you plan to extend your trip.</p>
        <p>Some neighborhood recommendations:</p>
        <ul>
          <li><a href="https://www.airbnb.com/s/Capitol-Hill--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Capitol%20Hill%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Capitol Hill</a>: feeling hip? feeling youthful? This is your place! Capitol Hill offers infinite coffee shops, bars, and world class restaurants. Connected to the lightrail from the airport.</li>
          <li><a href="https://www.airbnb.com/s/Fremont--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Fremont%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Fremont</a>: the self-proclaimed center of the universe now-turned Googletopia. Find the Fremont Troll, Theo's Chocolate, and enjoy life on the canal.</li>
          <li><a href="https://www.airbnb.com/s/Wallingford--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Wallingford%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Wallingford</a>: The neighborhood where Taylor and Sam first lived together! 45th street offers food, shops, and bars. Near the Zoo and sits along I-5 for quick access to downtown and other neighborhoods.</li>
          <li><a href="https://www.airbnb.com/s/Columbia-City--Seattle--Washington--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&date_picker_type=calendar&checkin=2023-08-11&checkout=2023-08-13&query=Columbia%20City%2C%20Seattle%2C%20Washington%2C%20United%20States" target="_blank">Columbia City &amp; Mt. Baker</a>: Along the lightrail, loaded with restaurants, and near Seward Park, which offers miles of hiking and views of Lake Washington. Just a small hop west to the wedding venue.</li>
        </ul>
      </Block>

      <Block id="ALTERNATIVE-HOTELS" style={{ backgroundColor: '#F2F0F2' }}>
        <h1>Alternative hotels</h1>
        <p>
          If the hotel block is no longer available or you'd like to look at some other hotels in the downtown area.
        </p>
        <ul>
          <li><a href="https://www.sonesta.com/royal-sonesta/wa/seattle/alexis-royal-sonesta-hotel-seattle/" target="_blanke">Hotel Alexis</a></li>
          <li><a href="https://hotelandra.com/" target="_blank">Hotel Andra</a></li>
          <li><a href="https://www.expedia.com/Seattle-Hotels-Motif-Seattle.h50947.Hotel-Information" target="_blank">Motif (Hyatt)</a></li>
        </ul>
      </Block>
    </div>
  )
}