import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout(props: any) : any {
  return (
    <React.Fragment>
    <div className="main">
      {/* <Nav /> */}

      <section className="content">
        {props.children}
      </section>

      <Footer />
    </div>
    </React.Fragment>
  )
};