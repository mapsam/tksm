import type { ReactNode } from 'react';
import type { AppProps } from 'next/app'

import Nav from './Nav';
import Footer from './Footer';
import React from 'react';

export default function Layout(props: AppProps) : ReactNode {
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