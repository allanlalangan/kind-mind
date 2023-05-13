import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="fixed bottom-16 left-2 right-2 top-16 overflow-y-scroll rounded bg-base-100/40 p-4 shadow-md md:bottom-2 md:left-40">
        {children}
      </main>
    </>
  );
}
