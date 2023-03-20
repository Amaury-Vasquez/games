import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/controller.ico" />
      </Head>
      <body className="overflow-y-auto scrollbar-thin scrollbar-thumb-light scrollbar-track-transparent scrollbar-thumb-rounded-lg relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
