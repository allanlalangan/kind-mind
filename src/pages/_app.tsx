import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Header from "~/components/Header";
import { useState } from "react";
import Sidebar from "~/components/Sidebar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [navIsOpen, setNavIsOpen] = useState(true);
  return (
    <SessionProvider session={session}>
      <Header navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <Sidebar />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
