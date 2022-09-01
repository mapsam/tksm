import React, { useState, useRef, useEffect } from 'react';
import Content from '../components/Content';
import Block from '../components/Block';
import LocationGroup from '../components/LocationGroup';

export default function Page({ geojson }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.3394);
  const [lat, setLat] = useState(47.62);
  const [zoom, setZoom] = useState(10.7);

  return (
    <Content
      name="Visit Seattle"
      img="seattle-pike-market-2.jpg"
      summary="Below is a combination of some of our favorite places in the area as well as must-see Seattle spots.">

      <Block id="INTRO">
        <p>You can filter by event type or neighborhood, depending on how you want to explore the area!</p>
        <ul>
          <li><a href="#THINGS-WEDDING-LOCATIONS">Wedding Locations</a></li>
          <li><a href="#THINGS-ICONIC-SEATTLE">Iconic Seattle</a></li>
          <li><a href="#THINGS-ARTS">Arts & Culture</a></li>
          <li><a href="#THINGS-BREWERIES">Breweries</a></li>
          <li><a href="#THINGS-DAY-TRIPS">Day Trips</a></li>
        </ul>
      </Block>

      <Block id="THINGS">
        <LocationGroup group='Wedding locations' />
        <LocationGroup group='Iconic Seattle' />
        <LocationGroup group='Arts & Culture' />
        <LocationGroup group='Breweries' />
        <LocationGroup group='Day Trips' />
      </Block>
    </Content>
  );
}