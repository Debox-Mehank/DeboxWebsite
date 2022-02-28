import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout";
import "swiper/css";
import "aos/dist/aos.css"
import Aos from "aos"
import Head from "next/head";
import Script from "next/script"
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Debox Consulting - Business Consulting Firm</title>
        <meta
          name="description"
          content="We partner with businesses to build a sustainable growth path through synergies of people, processes and technology."
        />
      </Head>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-101882907-1" />
      <Script strategy="lazyOnload">
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-101882907-1');`
        }
      </Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
