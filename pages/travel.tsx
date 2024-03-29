import React, { useState, useRef, useEffect } from 'react';
import Content from '../components/Content';
import Block from '../components/Block';

import 'mapbox-gl/dist/mapbox-gl.css';
import travelImage from '../public/sam-taylor-lightrail.png';

export default function Page() {
  return (
    <Content
      name="Travel"
      summary="Traveling to and getting around Seattle is a breeze! ✈️"
      img={travelImage}>
      <Block id="AIRPORT">
        <h1>Airport</h1>
        <p>If you’re coming from out of town, we recommend flying into Seattle-Tacoma International Airport (SEA). Plenty of rental car companies are available here, but we recommend taking advantage of city living and utilizing public transportation (and on wedding day we want you to stay late dancing and safely help us drink all of the alcohol we got).</p>
      </Block>

      <Block id="PUBLIC-TRANSPORTATION">
        <h1>Public Transportation</h1>
        <p style={{ backgroundColor: '#ffffae', padding: '1rem' }} className="mono">
          Link light rail service will be reduced August 12th - 20th! Make plans accordingly. Learn more <a href="https://www.soundtransit.org/ride-with-us/service-alerts/upcoming-1-line-service-reduced-aug-12-20" target="_blank">here</a>. Good timing, right?
        </p>
        <p>The Link Light Rail has a stop at the airport and you can head northbound into downtown. The University Street station stop is a five minute walk to the Inn at the WAC as well as numerous other hotel locations including Hotel Alexis, Fairmont Olympic, Kimpton Hotel Monaco, and Hilton Seattle. The next north stop, Westlake Center, is a five minute walk to other hotel locations, including Hotel Andra and The Motif (Hyatt).</p>
        <p>You can also access the Link Light Rail to get to our wedding venue. You will grab the southbound train to the SODO Station and it’s about a 13 minute walk from the station to the venue.</p>
        <p>Trains arrive every 10 minutes and fare ranges from $2.50-$3.00 a ride. Day passes are also available and tickets can be purchased at every train station.</p>
      </Block>

      <Block id="RIDESHARE">
        <h1>Rideshare</h1>
        <p>Lyft and Uber are readily available and easily accessible throughout the city and can help you easily explore all of the places we love.</p>
        <p><strong>Discount code</strong></p>
        <p>We want nothing more than for our guests to take advantage of being in a big city and to avoid the worst part of any wedding -- deciding who will be the designated driver. A Lyft code will be available at the venue for you to get home after our wedding. Come prepared to party, drink, dance, and have fun, and we’ll make sure you get home safely.</p>
      </Block>
    </Content>
  );
}