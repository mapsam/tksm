import type { AppProps } from 'next/app'

import '../styles/main.scss';
import Layout from '../components/Layout';
import Head from 'next/head';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name='description' content='Kelleher/Matthews Wedding' />
        <title>Kelleher/Matthews Wedding</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}