import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Block from '../components/Block';
import LocationGroup from '../components/LocationGroup';
import locations from '../lib/locations';

import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwc2FtIiwiYSI6ImNsMm5qejJxcTA1ZGUzZXFtMTcyNzJ1bGcifQ.cXVgrUVeQVqXFrslt_d88Q';

export async function getServerSideProps(context) {
  const features = Object.keys(locations)
    .reduce((memo, g) => memo.concat(locations[g]), [])
    .map((loc) => {
      return {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [loc.lng || 0.0, loc.lat || 0.0]
        },
        properties: loc
      }
    });

  return {
    props: {
      geojson: {
        type: 'FeatureCollection',
        features
      }
    }
  }

}

export default function Page({ geojson }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.3394);
  const [lat, setLat] = useState(47.62);
  const [zoom, setZoom] = useState(10.7);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/dark-v10',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });

  //   map.current.on('load', () => {
  //     map.current.addSource('locations', {
  //       type: 'geojson',
  //       data: geojson
  //     });

  //     map.current.addLayer({
  //       id: 'locations',
  //       source: 'locations',
  //       type: 'circle',
  //       paint: {
  //         'circle-radius': 5,
  //         'circle-color': '#01FF70',
  //         'circle-stroke-width': 2,
  //         'circle-stroke-color': '#333'
  //       }
  //     })
  //   });
  // });

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
      </Block>

      <Block id="THINGS-ICONIC-SEATTLE">
        <LocationGroup group='Iconic Seattle' />
      </Block>

      <Block id="THINGS-ARTS" style={{ backgroundColor: '#E6DCF2' }}>
        <LocationGroup group='Arts & Culture' />
      </Block>

      <Block id="THINGS-BREWERIES">
        <LocationGroup group='Breweries' />
      </Block>

      {/* <Block id="THINGS-OUTDOORS" backgroundClass="bg-topography">
        <LocationGroup group='Outdoors' />
      </Block> */}

      <Block id="THINGS-DAY-TRIPS" style={{ backgroundColor: '#F2F0F2' }}>
        <LocationGroup group='Day Trips' />
      </Block>
    </div>
  );
}