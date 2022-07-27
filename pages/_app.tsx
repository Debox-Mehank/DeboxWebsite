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
import * as fbq from '../lib/fpixel'
import { useRouter } from 'next/router'

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    Aos.init()
  }, []);

  // For FB Pixel
  useEffect(() => {

    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


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
      {/* Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      {/* Google Tag Manager */}
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
