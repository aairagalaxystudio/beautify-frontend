import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* Luxury Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        {/* Theme */}
        <meta name="theme-color" content="#000000" />

        {/* SEO */}
        <meta
          name="description"
          content="Beautify by Mansi – Luxury Press On Nails"
        />

        {/* Favicon */}
        <link rel="icon" href="/logo.svg" />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}