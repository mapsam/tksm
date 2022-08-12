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

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('load', () => {

    });
  });

  return (
    <div className="content">
      <Block id="MAP">
        <div ref={mapContainer} className="map-container" />
      </Block>

      <Block id="THINGS-EVENT-LOCATIONS">
        <LocationGroup group='Event locations' />
      </Block>

      <Block id="THINGS-NEAR-THE-VENUE">
        <LocationGroup group='Near the venue' />
      </Block>

      <Block id="THINGS-ICONIC-SEATTLE" style={{ backgroundColor: '#DEEFE7' }}>
        <LocationGroup group='Iconic Seattle' />
      </Block>

      <Block id="THINGS-RESTAURANTS" backgroundClass="bg-food">
        <LocationGroup group='Restaurants & Bars' />
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

      {/* <Block id="THINGS" style={{ backgroundColor: '#fef2f7' }}>
        {locationElements}
      </Block> */}
    </div>
  );
}