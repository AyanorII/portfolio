import NextHead from "next/head";

const Head = () => {
  const title = "Ayanori Toyoda - Software Engineer";
  const description = `
    Meet Ayanori Toyoda, a Brazilian-born Full Stack Software Engineer based in Saitama, Japan.
    Explore his portfolio, showcasing a range of projects crafted with Next.js, Javascript, React, Ruby on Rails, and Typescript.
    Dive into Ayanori's journey from a world-class bootcamp to a lead role in a matchmaking startup.
    Discover his passion for continuous learning and innovation in software engineering.
  `
  const image = "https://i.postimg.cc/Ss3vDG1P/pika-1688092694582-1x.png"

  return (
    <NextHead>
      {/* ------------------------ Primary Meta Tags ----------------------- */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content={description}
      />
      <meta name="author" content="Ayanori Toyoda" />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, React, Next.js, TypeScript, Ruby, Ruby on Rails, Web Development, Front-end developer, Software Engineer"
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
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />
      {/* ----------------------- Open Graph / Facebook -------------------- */}

      {/* ----------------------------- Twitter ---------------------------- */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ayanori-toyoda.com/" />
      <meta
        property="twitter:title"
        content={title}
      />
      <meta
        property="twitter:description"
        content={description}
      />
      <meta
        property="twitter:image"
        content={image}
      />
      {/* ----------------------------- Twitter ---------------------------- */}
    </NextHead>
  );
};
export default Head;
