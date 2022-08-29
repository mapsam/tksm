import RSVP from '../components/Rsvp';
import Block from '../components/Block';
import { useState } from 'react';

export default function Index() {
  const [ showImage, setShowImage ] = useState<boolean | null>(true);

  return (
    <div className="content">
      <Block id="TITLE" style={{ marginBottom: '2.3rem' }}>
        <h1 className="title">Taylor &amp; Sam<br />are getting married!</h1>

        <div
          className="title-image-container"
          onMouseEnter={() => setShowImage(false)}
          onMouseLeave={() => setShowImage(true)}
          onTouchStart={() => setShowImage(false)}
          onTouchEnd={() => setShowImage(true)}
          onTouchCancel={() => setShowImage(true)}>
          <div className="title-image" style={{ backgroundImage: `url('/title-laugh.png')`}}></div>
          {showImage && <div className="title-image" style={{ backgroundImage: `url('/title-smile.png')`}}></div> }
        </div>
      </Block>

      <Block id="INFO" backgroundClass='color-gray-bg'>
        <p><strong>
          Saturday August 12th, 2023<br />
          Seattle, WA
        </strong></p>
        <p>
          We couldn't be more excited to host our friends and family out here in the Pacific Northwest,
          a place we've called home for more than a decade. We'll have great food, cold drinks, and
          enough live music to lose your socks.
        </p>
        <p>
          RSVPs will be made available in early spring 2023. Until then, book your <a href="/accomodations">accomodations</a> and learn more about <a href="/seattle">traveling to Seattle</a>.
        </p>
      </Block>
    </div>
  )
}