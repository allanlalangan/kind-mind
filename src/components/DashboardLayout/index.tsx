import { useState } from "react";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <>
      <Header navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      <Sidebar navIsOpen={navIsOpen} />
      <main className="fixed bottom-2 left-2 right-2 top-16 overflow-y-scroll rounded bg-base-100/40 p-4 shadow-md md:left-40">
        {children}
      </main>
    </>
  );
}
