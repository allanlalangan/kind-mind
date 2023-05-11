import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative min-h-screen bg-gradient-to-br from-primary-400 to-secondary-400">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
