import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/talk_logo_bw.png" />
        <link rel="shortcut icon" href="/images/talk_logo_bw.png" />
        <link rel="apple-touch-icon" href="/images/talk_logo_bw.png" />
        <meta property="og:image" content="https://talksocialapp.com/images/talk_logo_bw.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-itunes-app" content="app-id=no" />
        <meta name="google-play-app" content="app-id=no" />
        
        {/* Désactiver le comportement PWA et empêcher l'invite d'installation */}
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-app-capable" content="no" />
      </Head>
      <body>
        <div id='main-container'>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
