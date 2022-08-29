import React from 'react';
import { useState, useEffect } from 'react';
import NavLink from './NavLink';

export default function Nav(props: any) : any {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <React.Fragment>
    <nav className="nav-desktop">
      <NavLink href="/" children="HOME" />
      <NavLink href="/schedule" children="SCHEDULE" />
      <NavLink href="/travel" children="TRAVEL" />
      <NavLink href="/accomodations" children="ACCOMODATIONS" />
      <NavLink href="/seattle" children="VISIT SEATTLE" />
      <NavLink href="/rsvp" children="RSVP" />
    </nav>

    <nav className="nav-mobile">
      <button className={isOpen ? "nav-button is-open" : "nav-button"} onClick={() => setIsOpen(!isOpen)}>
        <span className="nav-button-bar"></span>
        <span className="nav-button-bar"></span>
        <span className="nav-button-bar"></span>
      </button>

      {isOpen &&
        <div className="nav">
          <ul>
            {/* <li><a href="/#RSVP" onClick={() => setIsOpen(false)}>RSVP</a></li> */}
            <li><a href="/" onClick={() => setIsOpen(false)}>HOME</a></li>
            <li><a href="/#SCHEDULE" onClick={() => setIsOpen(false)}>SCHEDULE</a></li>
            <li><a href="/#FAQ" onClick={() => setIsOpen(false)}>FAQ</a></li>
            <li><a href="/travel#accomodations" onClick={() => setIsOpen(false)}>ACCOMODATIONS</a></li>
            <li><a href="/travel" onClick={() => setIsOpen(false)}>TRAVEL</a></li>
          </ul>
        </div>
      }
    </nav>
    </React.Fragment>
  )
};