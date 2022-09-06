import React, { useState, useRef, useEffect } from 'react';
import Content from '../components/Content';
import Block from '../components/Block';
import LocationGroup from '../components/LocationGroup';
import locations, { groupByKey } from '../lib/locations';
import seattleImage from '../public/seattle-pike-market-fish.png';

export default function Page() {
  const [ group, setGroup ] = useState('group');
  const [ groupedLocations, setGroupedLocations ] = useState(groupByKey('group', locations));
  useEffect(() => {}, [group, groupedLocations]);

  function reGroup(e) {
    e.preventDefault();
    setGroup(e.target.value);
    setGroupedLocations(groupByKey(e.target.value, locations));
  }

  const locationElements = Object.keys(groupedLocations).map((k) => {
    return <LocationGroup name={k} items={groupedLocations[k]} />
  });

  return (
    <Content
      name="Visit Seattle"
      img={seattleImage}
      summary="Below is a combination of some of our favorite places in the area as well as must-see Seattle spots.">

      <Block id="LOCATIONS">
        <p>You can filter by event type or neighborhood, depending on how you want to explore the area.</p>
        <button className={group === 'group' ? 'location-filter selected' : 'location-filter'} value="group" key="button-group" onClick={reGroup}>category</button>
        <button className={group === 'neighborhood' ? 'location-filter selected' : 'location-filter'} value="neighborhood" key="button-neighborhood" onClick={reGroup}>neighborhood</button>
        {locationElements}
      </Block>
    </Content>
  );
}