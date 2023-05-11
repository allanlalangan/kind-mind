import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const session = useSession();
  if (!session.data) return <p>Please login to view your dashboard</p>;
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold text-primary-600">
        {session?.data?.user?.name}&apos;s Dashboard
      </h1>
    </>
  );
}
