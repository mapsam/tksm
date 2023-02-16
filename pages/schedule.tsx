import Content from '../components/Content';
import Block from '../components/Block';
import { useState } from 'react';

export default function Index() {
  const [ showImage, setShowImage ] = useState<boolean | null>(true);
  const toc = [
    'Friday 08/11: Traveler\'s shindig',
    'Saturday 08/12: Wedding',
    'Sunday 08/13: Picnic'
  ].join('<br />');

  return (
    <Content name="Schedule" summary={toc}>
      <Block id="AUG-11">
        <h1>Friday, August 11<sup>th</sup> - Traveler's shindig</h1>
        <p className="location-metadata">
          Time: 8pm - 10pm<br />
          Location: The Pine Box, Capitol Hill<br />
          Address: <a href="https://goo.gl/maps/wKLLnmStPFbjRX8q8" target="_blank">1600 Melrose Ave, Seattle WA 98122</a>
        </p>
        <p>
          We will have a dedicated space at one of our classic favorites, <a href="https://www.pineboxbar.com/" target="_blank">The Pine Box</a>.
          Taylor and Sam frequented this bar in their early Seattle days as they
          wandered their way up into Capitol Hill for a night out. Grab a beer and enjoy
          the only church-related event of the weekend in the former chapel and funeral
          home that provided services for Bruce Lee.
        </p>
        <p>
          The Pine Box is a 14 minute walk from the <a href="/accomodations">Inn at the WAC</a> hotel block downtown.
          For those seeking dinner, we recommend finding some food before in Capitol Hill.
          Some recommendations:
        </p>
        <ul>
          <li><a href="https://goo.gl/maps/wiMij7nu6KBAm2AJ8" target="_blank">Taylor's Shellfish & Oyster Bar</a> (Seafood, $$$)</li>
          <li><a href="https://goo.gl/maps/E1TrtnodUL2MB17j8" target="_blank">Poquitos</a> (Mexican, $$)</li>
          <li><a href="https://goo.gl/maps/RzENMoAYKp1ny5qBA" target="_blank">Mamnoon</a> (Middle Eastern, $$)</li>
          <li><a href="https://goo.gl/maps/5PXG3uwiQzh3brit9" target="_blank">Stateside</a> (Asian Fusion, $$$)</li>
          <li><a href="https://goo.gl/maps/YDd5gxhn3JEPgk1K6" target="_blank">McMenamins Six Arms</a> (Bar & eatery, $)</li>
          <li><a href="https://goo.gl/maps/remN5icAqT82HhW97" target="_blank">Ian's</a> (Pizza by the slice, $)</li>
        </ul>
      </Block>

      <Block id="AUG-12">
        <h1>Saturday, August 12<sup>th</sup> - Wedding day</h1>
        <p className="location-metadata">
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
      </Block>

      <Block id="AUG-13">
        <h1>Sunday, August 13<sup>th</sup> - Picnic</h1>
        <p className="location-metadata">
          Time: 10am - 1pm<br />
          Location: TBD<br />
        </p>
        <p>
          Last chance to hug that uncle of yours. Come grab coffee and a baked good in one of Seattle's lovely parks, get some fresh air, and bid farewell to the newlyweds.
        </p>
      </Block>
    </Content>
  )
}