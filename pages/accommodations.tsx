import Content from '../components/Content';
import Block from '../components/Block';
import accomImage from '../public/sam-taylor-wac.png';

export default function Page() {
  return (
    <Content
      name="Accommodations"
      summary="No matter where you stay, we recommend booking accommodations as soon as possible. August in Seattle is prime outdoor and cruise season."
      img={accomImage}>
      <Block id="HOTEL-BLOCK">
        <h1>Hotel Block</h1>
        <p>
          <strong><a href="https://www.wac.net/stay-at-the-inn/reservations/" target="_blank">The Inn at the Washington Athletic Club (WAC)</a></strong> is offering us special rates for our wedding weekend. Located in downtown Seattle and
          above the historic athletic club, you'll have access to beautiful rooms, the spa, and a
          variety of lounges and restaurants.
        </p>
        <p>
          <strong>How to book</strong>: reservations can be made by emailing innreservations@wac.net or calling 206-464-3055 or 800-275-3775 by Friday, July 14, 2023. Identify yourself as part of the "Matthews/Kelleher Wedding" to ensure the group rate is received. The special rate is applicable before and after the wedding event dates.
        </p>
      </Block>

      <Block id="NEIGHBORHOODS">
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

      <Block id="ALTERNATIVE-HOTELS">
        <h1>Alternative hotels</h1>
        <p>
          If the hotel block is no longer available or you'd like to look at some other hotels in the downtown area.
        </p>
        <ul>
          <li><a href="https://www.sonesta.com/royal-sonesta/wa/seattle/alexis-royal-sonesta-hotel-seattle/" target="_blanke">Hotel Alexis</a></li>
          <li><a href="https://hotelandra.com/" target="_blank">Hotel Andra</a></li>
          <li><a href="https://www.expedia.com/Seattle-Hotels-Motif-Seattle.h50947.Hotel-Information" target="_blank">Motif (Hyatt)</a></li>
          <li><a href="https://www.monaco-seattle.com/" target="_blank">Kimpton Hotel Monaco</a></li>
          <li><a href="https://www.fairmont.com/seattle/" target="_blank">Fairmont Olympic</a></li>
          <li><a href="https://www.hilton.com/en/hotels/seashhf-hilton-seattle/" target="_blank">Hilton Seattle</a></li>
        </ul>
      </Block>
    </Content>
  )
}