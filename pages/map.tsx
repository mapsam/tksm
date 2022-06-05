import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Block from '../components/Block';

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc2FtIiwiYSI6ImNsMm5qejJxcTA1ZGUzZXFtMTcyNzJ1bGcifQ.cXVgrUVeQVqXFrslt_d88Q';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className="content">
      <Block id="MAP">
        <h1>Where are we doing things?</h1>
      </Block>

      <div ref={mapContainer} className="map-container" />
    </div>
  );
}