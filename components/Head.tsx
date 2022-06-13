import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      {/* ------------------------ Primary Meta Tags ----------------------- */}
      <title>Ayanori Toyoda - Front-End Developer</title>
      <meta name="title" content="Ayanori Toyoda - Front-End Developer" />
      <meta
        name="description"
        content="Hi there, I'm Ayanori Toyoda, a passionate Brazilian front-end developer based in Saitama, Japan that loves to bring beautiful design into amazing real-life projects."
      />
      <meta name="author" content="Ayanori Toyoda" />
      <meta name="keywords" content="HTML, CSS, JavaScript, React, Next.js, TypeScript, Ruby, Ruby on Rails, Web Development, Front-end developer" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* ------------------------ Primary Meta Tags ----------------------- */}

      {/* ---------------------- Open Graph / Facebook --------------------- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ayanori-toyoda.com/" />
      <meta
        property="og:title"
        content="Ayanori Toyoda - Front-End Developer"
      />
      <meta
        property="og:description"
        content="Hi there, I'm Ayanori Toyoda, a passionate Brazilian front-end developer based in Saitama, Japan that loves to bring beautiful design into amazing real-life projects."
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/Ghw58pSF/og-image.png"
      />
      {/* ----------------------- Open Graph / Facebook -------------------- */}

      {/* ----------------------------- Twitter ---------------------------- */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ayanori-toyoda.com/" />
      <meta
        property="twitter:title"
        content="Ayanori Toyoda - Front-End Developer"
      />
      <meta
        property="twitter:description"
        content="Hi there, I'm Ayanori Toyoda, a passionate Brazilian front-end developer based in Saitama, Japan that loves to bring beautiful design into amazing real-life projects."
      />
      <meta
        property="twitter:image"
        content="https://i.postimg.cc/Ghw58pSF/og-image.png"
      />
      {/* ----------------------------- Twitter ---------------------------- */}
    </NextHead>
  );
};
export default Head;
