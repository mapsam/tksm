import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';
import React from 'react';

export default function Layout(props) {
  return (
    <React.Fragment>
    <div className="main is-family-primary is-size-5">
      <Nav />
      
      <section className="content">
        {props.children}
      </section>

      <Footer />
    </div>
    </React.Fragment>
  )
};