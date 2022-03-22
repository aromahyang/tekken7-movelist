import Head from 'next/head';
import { useEffect } from 'react';
import { polyfill } from 'smoothscroll-polyfill';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const init = () => {
    polyfill();
  };
  useEffect(init, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
