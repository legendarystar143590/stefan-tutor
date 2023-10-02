import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <title>SocialAGI Dev</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
