import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-400 to-secondary-400 p-2">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
