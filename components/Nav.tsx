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
    <button className={isOpen ? "nav-button is-open" : "nav-button"} onClick={() => setIsOpen(!isOpen)}>
      <span className="nav-button-bar"></span>
      <span className="nav-button-bar"></span>
      <span className="nav-button-bar"></span>
    </button>

    <nav className={isOpen ? "nav is-open" : "nav"}>
      <NavLink href="/" children="🏠" clickAction={setIsOpen}/>
      <NavLink href="/schedule" children="SCHEDULE" clickAction={setIsOpen}/>
      <NavLink href="/travel" children="TRAVEL" clickAction={setIsOpen}/>
      <NavLink href="/accommodations" children="ACCOMMODATIONS" clickAction={setIsOpen}/>
      <NavLink href="/seattle" children="SEATTLE" clickAction={setIsOpen}/>
      <NavLink href="/faq" children="FAQ" clickAction={setIsOpen}/>
      <NavLink href="/registry" children="REGISTRY" clickAction={setIsOpen} />
      <NavLink href="/rsvp" children="🍰 RSVP" clickAction={setIsOpen} highlight={true} />
    </nav>
    </React.Fragment>
  )
};