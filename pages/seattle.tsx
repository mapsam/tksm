import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Block from '../components/Block';
import LocationGroup from '../components/LocationGroup';

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc2FtIiwiYSI6ImNsMm5qejJxcTA1ZGUzZXFtMTcyNzJ1bGcifQ.cXVgrUVeQVqXFrslt_d88Q';

export default function Page() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.3395);
  const [lat, setLat] = useState(47.5888);
  const [zoom, setZoom] = useState(9.6);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });

  //   map.current.on('load', () => {

  //   });
  // });

  return (
    <div className="content">
      <Block id="MAP">
        <img src='seattle-skyline.png' style={{ maxWidth: 500, opacity: 0.2 }}/>
        <h1>Visit Seattle</h1>
        <p>Below is a combination of some of our favorite places in the area as well as must-see Seattle spots. You can filter by event type or neighborhood, depending on how you want to explore the area!</p>
        <ul>
          <li><a href="#THINGS-EVENT-LOCATIONS">Event Locations</a></li>
          <li><a href="#THINGS-ICONIC-SEATTLE">Iconic Seattle</a></li>
          <li><a href="#THINGS-ARTS">Arts & Culture</a></li>
          <li><a href="#THINGS-BREWERIES">Breweries</a></li>
          <li><a href="#THINGS-OUTDOORS">Outdoors</a></li>
          <li><a href="#THINGS-DAY-TRIPS">Day Trips</a></li>
        </ul>
        {/* <div ref={mapContainer} className="map-container" /> */}
      </Block>

      <Block id="THINGS-EVENT-LOCATIONS" style={{ backgroundColor: '#DEEFE7' }}>
        <LocationGroup group='Event locations' />
      </Block>

      <Block id="THINGS-ICONIC-SEATTLE">
        <LocationGroup group='Iconic Seattle' />
      </Block>

      <Block id="THINGS-ARTS" style={{ backgroundColor: '#fef2f7' }}>
        <LocationGroup group='Arts & Culture' />
      </Block>

      <Block id="THINGS-BREWERIES">
        <LocationGroup group='Breweries' />
      </Block>

      <Block id="THINGS-OUTDOORS" backgroundClass="bg-topography">
        <LocationGroup group='Outdoors' />
      </Block>

      <Block id="THINGS-DAY-TRIPS">
        <LocationGroup group='Day Trips' />
      </Block>
    </div>
  );
}