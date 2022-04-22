import React, { useState } from 'react';
import Image from 'next/image';

import RSVP from '../components/Rsvp';
import Block from '../components/Block';
import imgSmile from '../public/title-smile.png';
import imgLaugh from '../public/title-laugh.png';

export default function Index() {
  const [showImage, setShowImage] = useState(true);

  return (
    <div className="content">
      <Block id="TITLE">
        <h1 className="title">Taylor &amp; Sam<br />are getting married!</h1>
        {/* <p>August 12th, 2023 – Seattle, WA</p> */}

        <div className="title-image-container"
          onMouseEnter={() => setShowImage(false)}
          onMouseLeave={() => setShowImage(true)}>
          <div className="title-image">
            <Image
              src={imgLaugh}
              alt="Sam and Taylor at a friend's wedding, laughing"
              layout="responsive"
            />
          </div>
          {showImage && (
            <div className="title-image">
              <Image
                src={imgSmile}
                alt="Sam and Taylor at a friend's wedding, smiling"
                layout="responsive"
              />
            </div>
          )}
        </div>
      </Block>

      <Block id="INFO" background="#DEEFE7">
        <p>
          We couldn't be more excited to host our friends and family out here in the Pacific Northwest,
          a place we've called home for more than a decade. We'll have great food, cold drinks, and
          enough live music to lose your socks.
        </p>
        <p>Saturday August 12th, 2023<br />5pm @ <a href="https://metropolistgroup.com/event-space/" target="_blank">Metropolist</a></p>
        <p>
          2931 First Ave. South,<br />Suite A, Seattle, WA
        </p>
      </Block>

      <Block id="SCHEDULE">
        <h1>
          Schedule of events
        </h1>
        <p>
          <strong>Friday, August 11th</strong> - Traveler's shindig.
        </p>
        <p>
          6 - 9pm: We'll be at the Octopus Bar in Wallingford, one of our local favorites in
          the neighborhood we first lived together. Come say hi to the Matthews and Kelleher families
          and meet some of our favorite locals. We'll have a portion of the bar reserved from 6-9pm.
          Drinks are on us, food is on you!
        </p>
        <p>
          <strong>Saturday, August 12th</strong> - Wedding day!
        </p>
        <p>
          We're getting married at the Metropolist down in Seattle's SODO district.
        </p>
        <p>
          5 - 6pm: Arrive and grab a beverage before the ceremony. Check out nearby Seapine Brewery
          or Westland Distillery beforehand if you're interested in some local libations.
        </p>
        <p>
          6 - 6:30pm: Ceremony. Grab a seat and share some smiles.
        </p>
        <p>
          6 - 7pm: Appetizers and happy hour.
        </p>
        <p>
          7 - 8:30pm: Dinner in the form of a taco and ____ food truck. No assigned tables, just
          grab a taco, a friend, and talk to an uncle.
        </p>
        <p>
          9 - 11pm: Our favorite Seattle funk band, <a href="https://www.eldridgegravy.com/" target="_blank">Eldridge Gravy &amp;
          The Court Supreme</a> will take us on a groovy journey into the evening.
        </p>
        <p>
          <strong>Sunday, August 13th</strong> - Brunch.
        </p>
        <p>
          Will someone host a brunch?
        </p>
      </Block>

      <Block id="ACCOMODATIONS">
        <h1>Accommodations</h1>
        <p>We encourage you to enjoy Seattle via Airbnb or Vrbo. Some nearby hotels are waka and flocka.</p>
      </Block>

      <Block id="RSVP" background="#f6f6f6">
        <h1>RSVP</h1>
        <p>Each individual should fill out this form by January 1st, 2023! If you need to submit for more than one person, refresh the page and submit again.</p>
        <RSVP />
      </Block>

      <Block id="FAQ">
        <h1>Frequently Asked Questions</h1>
        <p>Have a question that isn't listed? Text us at 651-343-6555. We'll add and amend as people ask :)</p>

        <h2>Are kids allowed?</h2>
        <p>Nope! Have you seen the size of the Matthews family? But for real, we love the kids. The wedding party is for the big kids.</p>

        <h2>COVID-19?</h2>
        <p>To keep us all safe we require you to be fully vaccinated at our wedding.</p>

        <h2>What should I do in Seattle while I'm visiting?</h2>
        <p>First of all, thanks so much for making the trip. We're really excited you want to spend some time in our favorite place.</p>

        <h2>How did we meet?</h2>
        <p>Taylor and Sam met while attending the University of Wisconsin-Madison.</p>
      </Block>
    </div>
  )
}