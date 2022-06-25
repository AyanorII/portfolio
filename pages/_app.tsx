import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Nav/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import "../styles/globals.css";
import theme from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="ga">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <MuiThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <>
            <ParticlesBackground />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </>
        </SCThemeProvider>
      </MuiThemeProvider>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}

export default MyApp;
