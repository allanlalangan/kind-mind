import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import Head from "next/head";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type MyAppProps = {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode;
  };
  pageProps: {
    session: Session | null;
  };
};

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      {getLayout(
        <>
          <Head>
            <title>kindMind</title>
            <meta name="description" content="Generated by create-t3-app" />
            <meta
              name="viewport"
              content={`width="device-width", height="device-height", initial-scale=1, user-scalable="no", viewport-fit="cover"`}
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
