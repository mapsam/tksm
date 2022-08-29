import React, { useState, useRef, useEffect } from 'react';
import Block from '../components/Block';
import LocationGroup from '../components/LocationGroup';

export default function Page({ geojson }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.3394);
  const [lat, setLat] = useState(47.62);
  const [zoom, setZoom] = useState(10.7);

  return (
    <div className="content">
      <Block id="INTRO">
        <h1 className="title">Visit Seattle</h1>
        <img src='seattle-pike-market-2.jpg' style={{ width: '100%' }}/>
        <p>Below is a combination of some of our favorite places in the area as well as must-see Seattle spots. You can filter by event type or neighborhood, depending on how you want to explore the area!</p>
        <ul>
          <li><a href="#THINGS-WEDDING-LOCATIONS">Wedding Locations</a></li>
          <li><a href="#THINGS-ICONIC-SEATTLE">Iconic Seattle</a></li>
          <li><a href="#THINGS-ARTS">Arts & Culture</a></li>
          <li><a href="#THINGS-BREWERIES">Breweries</a></li>
          {/* <li><a href="#THINGS-OUTDOORS">Outdoors</a></li> */}
          <li><a href="#THINGS-DAY-TRIPS">Day Trips</a></li>
        </ul>

        {/* <div ref={mapContainer} className="map-container" /> */}
      </Block>

      <Block id="THINGS-WEDDING-LOCATIONS" style={{ backgroundColor: '#F2F0F2' }}>
        <LocationGroup group='Wedding locations' />
        <LocationGroup group='Iconic Seattle' />
        <LocationGroup group='Arts & Culture' />
        <LocationGroup group='Breweries' />
        <LocationGroup group='Day Trips' />
      </Block>
    </div>
  );
}