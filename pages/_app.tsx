import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Nav/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import theme from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T55VSZS');`,
        }}
      />
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
    </>
  );
}

export default MyApp;
