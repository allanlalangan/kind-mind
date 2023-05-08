import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const session = useSession();
  return (
    <>
      {!!session.data ? (
        <h1 className="text-4xl font-bold text-primary-focus">
          {session?.data?.user?.name}&apos;s Dashboard
        </h1>
      ) : (
        <p>Please login to view your dashboard</p>
      )}
    </>
  );
}
