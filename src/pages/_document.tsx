import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
      <Html lang="en">
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                  href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;700;800&display=swap"
                  rel="stylesheet"
              />
              <link rel="shortcut icon" href="./images/favicon.png" />
        
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  );
}