import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '@/components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/talk_logo_bw.png" />
        <link rel="shortcut icon" href="/images/talk_logo_bw.png" />
        <link rel="apple-touch-icon" href="/images/talk_logo_bw.png" />
        <meta name="theme-color" content="#ffffff" />
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
