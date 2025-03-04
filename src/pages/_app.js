import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss';
import '@/styles/blogs.scss';
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';
import Head from 'next/head'
import ReactGA from 'react-ga4';
import DynamicMeta from '@/components/DynamicMeta';
import useDropShadow from '@/hooks/useDropShadow';
import Layout from '@/components/Layout';


const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useDropShadow();
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');

  
  }, []);

  return (
    <>
      <DynamicMeta />
      <main className={montserrat.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
      <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap" rel="stylesheet"></link>
    </>
  );
}
