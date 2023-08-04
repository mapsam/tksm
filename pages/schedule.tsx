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
          Time: 4pm - 7pm<br />
          Location: Optimism Brewery, Capitol Hill<br />
          Address: <a href="https://goo.gl/maps/3cugYKecdhcu25WR7" target="_blank">1158 Broadway, Seattle, WA 98122</a>
        </p>
        <p>
          We have dedicated space at <a href="https://optimismbrewing.com/" target="_blank">Optimism Brewery</a> – a frequent retreat for Taylor and her co-workers, 
          plus it's home to Sam's favorite restroom design. First round is on us! Kids are welcome.
        </p>
        <p>
          Optimism Brewery is an 18 minute walk from the <a href="/accommodations">Inn at the WAC</a> downtown, and an easy 9 minute walk from the Capitol Hill light rail station.
          For those seeking dinner, you have a few options: bring your own to the brewery, eat from the <a href="https://optimismbrewing.com/food-trucks" target="_blank">food trucks</a> on-site, or go out to any of the
          many restaurants in Capitol Hill afterwards. Some recommendations:
        </p>
        <ul>
          <li><a href="https://goo.gl/maps/wiMij7nu6KBAm2AJ8" target="_blank">Taylor's Shellfish & Oyster Bar</a> (Seafood, $$$)</li>
          <li><a href="https://goo.gl/maps/E1TrtnodUL2MB17j8" target="_blank">Poquitos</a> (Mexican, $$)</li>
          <li><a href="https://goo.gl/maps/RzENMoAYKp1ny5qBA" target="_blank">Mamnoon</a> (Middle Eastern, $$)</li>
          <li><a href="https://goo.gl/maps/5PXG3uwiQzh3brit9" target="_blank">Stateside</a> (Asian Fusion, $$$)</li>
          <li><a href="https://goo.gl/maps/YDd5gxhn3JEPgk1K6" target="_blank">Boat Bar</a> (Local Oysters, bites, libations, $$$)</li>
          <li><a href="https://goo.gl/maps/remN5icAqT82HhW97" target="_blank">Ian's</a> (Pizza by the slice, $)</li>
        </ul>
      </Block>

      <Block id="AUG-12">
        <h1>Saturday, August 12<sup>th</sup> - Wedding</h1>
        <p className="location-metadata">
          Time: 4:30pm - 11pm<br />
          Location: Metropolist<br />
          Address: <a href="https://goo.gl/maps/3raqone4uzQdv3dQA" target="_blank">2931 First Ave. South, Suite A, Seattle, WA</a>
        </p>
        <p>
          We're getting married in Seattle's SODO district.
          We'll have a quick ceremony, food trucks, open bar, and cap off the night
          with Eldridge Gravy and the Court Supreme,
          our favorite local funk band. Get groovy people!
        </p>
        <ul>
          <li>04:30pm: Doors Open</li>
          <li>05:00pm: Ceremony</li>
          <li>05:30pm: Cocktail hour</li>
          <li>06:30pm: Dinner (Mexican/Cuban fusion)</li>
          <li>07:30pm: Dessert (Mini donuts) & Photo booth</li>
          <li>08:00pm: Live band & dancing</li>
          <li>11:00pm: Toodaloo!</li>
        </ul>
        <p><em>What to wear</em>: Semi-formal. Dressy-casual. Sparkly chic. Bring some fun, make it funky and make sure you can comfortably dance. The event is indoors and has A/C if it's a scorcher.</p>
        <p><em>Colors:</em> If you really want to match, here's our color scheme:</p>
        <p style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: '#753c26', width: 35, height: 35, borderRadius: '50%', display: 'inline-block', marginRight: '0.5em' }}></div>
          <div style={{ backgroundColor: '#bcb8b0', width: 35, height: 35, borderRadius: '50%', display: 'inline-block', marginRight: '0.5em' }}></div>
          <div style={{ backgroundColor: '#aa6745', width: 35, height: 35, borderRadius: '50%', display: 'inline-block', marginRight: '0.5em' }}></div>
          <div style={{ backgroundColor: '#98b6a4', width: 35, height: 35, borderRadius: '50%', display: 'inline-block', marginRight: '0.5em' }}></div>
          <div style={{ backgroundColor: '#606b53', width: 35, height: 35, borderRadius: '50%', display: 'inline-block', marginRight: '0.5em' }}></div>
          <div style={{ backgroundColor: '#dbd0bf', width: 35, height: 35, borderRadius: '50%', display: 'inline-block', marginRight: '0.5em' }}></div>
          <div style={{ backgroundColor: '#dbd0bf', width: 35, height: 35, borderRadius: '50%', display: 'inline-block', marginRight: '0.5em',
            backgroundImage: 'url("/discoball.gif")',
            backgroundPosition: 'center',
            backgroundSize: '180%'
          }}></div>
        </p>
        <p><em>Before:</em> If you're looking for a round before the wedding kicks off, <a href="https://www.seapinebrewing.com/our-roots" target="_blank">Seapine brewery</a> is just around the corner. You can also grab a cocktail at <a href="https://www.westlanddistillery.com/visit" target="_blank">Westland Distillery</a>, which shares a wall with the venue. Beer and wine will be available before and during the ceremony as well.</p>

      </Block>

      <Block id="AUG-13">
        <h1>Sunday, August 13<sup>th</sup> - Picnic</h1>
        <p className="location-metadata">
          Time: 10am - 12pm<br />
          Location: Gasworks Park<br />
          Aaddress: <a href="https://goo.gl/maps/ij7GFThmAF6UZAMQ7" target="_blank">2101 N Northlake Way, Seattle, WA 98103</a>
        </p>
        <p>
          Last chance to hug that uncle of yours. Come grab coffee and a baked good in one of Seattle's lovely parks, get some fresh air, and bid farewell to the newlyweds.
        </p>
        <p>We'll drop a pin here once we have an established location at the park.</p>
        <p>
          If you're coming from Downtown and the hotel block, you can <a href="https://www.google.com/maps/dir/Inn+at+the+WAC,+1325+6th+Ave,+Seattle,+WA+98101/Gas+Works+Park,+North+Northlake+Way,+Seattle,+WA/@47.6281032,-122.3623272,13.36z/data=!4m14!4m13!1m5!1m1!1s0x54906ab469628b59:0xd824805a4f80772e!2m2!1d-122.3333373!2d47.6096947!1m5!1m1!1s0x54901502b25bb07f:0x1e6e55abec496196!2m2!1d-122.3343532!2d47.6456308!3e3" target="_blank">take the 62 bus line</a> (35 minutes, $2.75) or grab an Uber/Lyft.
          Parking is available at the park or in the nearby neighborhood.
        </p>
      </Block>
    </Content>
  )
}