import { useSession } from "next-auth/react";
import { type ReactElement } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import type { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
  const session = useSession();
  if (!session.data) return <p>Please login to view your dashboard</p>;
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold text-primary-600">
        {session?.data?.user?.name}&apos;s Dashboard
      </h1>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
