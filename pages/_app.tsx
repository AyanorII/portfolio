import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Nav/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";
import "../styles/globals.css";
import theme from "../styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}

export default MyApp;
