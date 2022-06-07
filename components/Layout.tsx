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
    <nav>
      <button className={isOpen ? "nav-button is-open" : "nav-button"} onClick={() => setIsOpen(!isOpen)}>
        <span className="nav-button-bar"></span>
        <span className="nav-button-bar"></span>
        <span className="nav-button-bar"></span>
      </button>

      {isOpen &&
        <div className="nav">
          <ul>
            <li><a href="#RSVP" onClick={() => setIsOpen(false)}>RSVP</a></li>
            <li><a href="#SCHEDULE" onClick={() => setIsOpen(false)}>SCHEDULE</a></li>
            <li><a href="#ACCOMODATIONS" onClick={() => setIsOpen(false)}>ACCOMODATIONS</a></li>
            <li><a href="#FAQ" onClick={() => setIsOpen(false)}>FAQ</a></li>
          </ul>
        </div>
      }
    </nav>

      <section className="content">
        {props.children}
      </section>

      <Footer />
    </div>
    </React.Fragment>
  )
};