import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      {/* ------------------------ Primary Meta Tags ----------------------- */}
      <title>Ayanori Toyoda - Full-Stack Developer</title>
      <meta name="title" content="Ayanori Toyoda - Full-Stack Developer" />
      <meta
        name="description"
        content="Hi there, my name is Ayanori Toyoda, a full-stack developer and Teacher Assistant at Le Wagon Tokyo, based in Saitama, Japan."
      />
      <meta name="author" content="Ayanori Toyoda" />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, React, Next.js, TypeScript, Ruby, Ruby on Rails, Web Development, Front-end developer, Full-Stack developer"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/logo.png" />
      <link
        rel="preload"
        as="font"
        href="/fonts/Gaoel.woff"
        type="font/woff"
        crossOrigin="anonymous"
      />
      {/* ------------------------ Primary Meta Tags ----------------------- */}

      {/* ---------------------- Open Graph / Facebook --------------------- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ayanori-toyoda.com/" />
      <meta
        property="og:title"
        content="Ayanori Toyoda - Full-Stack Developer"
      />
      <meta
        property="og:description"
        content="Hi there, my name is Ayanori Toyoda, a full-stack developer and Teacher Assistant at Le Wagon Tokyo, based in Saitama, Japan."
      />
      <meta
        property="og:image"
        content="https://i.imgur.com/cibYiPI.png"
      />
      {/* ----------------------- Open Graph / Facebook -------------------- */}

      {/* ----------------------------- Twitter ---------------------------- */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ayanori-toyoda.com/" />
      <meta
        property="twitter:title"
        content="Ayanori Toyoda - Full-Stack Developer"
      />
      <meta
        property="twitter:description"
        content="Hi there, my name is Ayanori Toyoda, a full-stack developer and Teacher Assistant at Le Wagon Tokyo, based in Saitama, Japan."
      />
      <meta
        property="twitter:image"
        content="https://i.imgur.com/cibYiPI.png"
      />
      {/* ----------------------------- Twitter ---------------------------- */}
    </NextHead>
  );
};
export default Head;
