```javascript
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: preload fonts for performance */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```
