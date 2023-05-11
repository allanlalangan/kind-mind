import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <Sidebar />
      <main className="z-[1] col-span-12 row-start-2 row-end-[12] mt-4 overflow-y-scroll rounded bg-base-100/40 p-4 shadow-md backdrop-blur-md md:col-span-11 md:col-start-2 md:row-start-2 md:row-end-[13] md:mt-0">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
