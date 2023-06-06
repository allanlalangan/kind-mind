import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative flex min-h-screen items-start justify-start p-2 safe-top safe-left safe-right safe-bottom">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
