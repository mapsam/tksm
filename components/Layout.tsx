import Footer from './Footer';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Layout(props: any) : any {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <React.Fragment>
    <div className="main">
      <nav className="nav2">
        <a href="/">HOME</a>
        <a href="/#SCHEDULE">SCHEDULE</a>
        <a href="/#RSVP">RSVP</a>
        <span className="nav2-title">Kelleher &amp; Matthews</span>
        <a href="/#ACCOMODATIONS">ACCOMODATIONS</a>
        <a href="/seattle">VISIT SEATTLE</a>
      </nav>
      {/* <nav>
        <button className={isOpen ? "nav-button is-open" : "nav-button"} onClick={() => setIsOpen(!isOpen)}>
          <span className="nav-button-bar"></span>
          <span className="nav-button-bar"></span>
          <span className="nav-button-bar"></span>
        </button>

        {isOpen &&
          <div className="nav">
            <ul>
              <li><a href="/#RSVP" onClick={() => setIsOpen(false)}>RSVP</a></li>
              <li><a href="/" onClick={() => setIsOpen(false)}>HOME</a></li>
              <li><a href="/#SCHEDULE" onClick={() => setIsOpen(false)}>SCHEDULE</a></li>
              <li><a href="/#ACCOMODATIONS" onClick={() => setIsOpen(false)}>ACCOMODATIONS</a></li>
              <li><a href="/#FAQ" onClick={() => setIsOpen(false)}>FAQ</a></li>
              <li><a href="/seattle" onClick={() => setIsOpen(false)}>VISIT SEATTLE</a></li>
            </ul>
          </div>
        }
      </nav> */}

      <section className="content">
        {props.children}
      </section>

      <Footer />
    </div>
    </React.Fragment>
  )
};