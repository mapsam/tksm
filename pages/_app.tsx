import type { AppProps } from 'next/app'

import '../styles/main.scss';
import '../styles/bg-topography.css';
import '../styles/bg-food.css';
import Layout from '../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageName: string = router.pathname.replace('/', '').toUpperCase();
  const title: string = `${pageName ? pageName + ' - ': ''}Kelleher/Matthews Wedding`;

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={title} />
        <meta itemProp="image" content="https://samtaylorwedding.com/title-smile.png" />

        <meta property="og:url" content={`https://samtaylorwedding.com${router.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content="https://samtaylorwedding.com/title-smile.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta name="twitter:image" content="https://samtaylorwedding.com/title-smile.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </React.Fragment>
  );
}