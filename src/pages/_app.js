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
      <Head>
        <title>talk - Landing Page</title>
        <meta name="description" content="Join a talk, find your voice, connect with people who care. talk is an anonymous social platform where authenticity meets meaningful discussions." />
        <meta name="keywords" content="talk, social, anonymous, conversations, voice, community" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="talk - think it, say it" />
        <meta property="og:description" content="Join a talk, find your voice, connect with people who care. talk is an anonymous social platform where authenticity meets meaningful discussions." />
        <meta property="og:url" content="https://talksocialapp.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="talk - think it, say it" />
        <meta name="twitter:description" content="Join a talk, find your voice, connect with people who care. talk is an anonymous social platform where authenticity meets meaningful discussions." />
      </Head>
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
