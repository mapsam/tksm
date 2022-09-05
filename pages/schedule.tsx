import Content from '../components/Content';
import Block from '../components/Block';
import { useState } from 'react';

export default function Index() {
  const [ showImage, setShowImage ] = useState<boolean | null>(true);

  return (
    <Content name="Schedule">
      <Block id="AUG-11">
        <h1>Friday, August 11<sup>th</sup> - Traveler's shindig</h1>
        <p>
          Time: 6pm - 9pm<br />
          Location: TBD
        </p>
        <p>
          Casual evening for those traveling from out of town.
          Say hi to the Matthews/Varner &amp; Kelleher/Stuecker families,
          grab a drink and a bite, and meet some of our favorite locals.
        </p>
        <p>More details to come.</p>
      </Block>

      <Block id="AUG-12">
        <h1>Saturday, August 12<sup>th</sup> - Wedding day!</h1>
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
      </Block>

      <Block id="AUG-13">
        <h1>Sunday, August 13<sup>th</sup> - Picnic</h1>
        <p>
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