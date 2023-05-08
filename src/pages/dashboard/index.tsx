import { useSession } from "next-auth/react";
import NewDoseForm from "~/components/NewDoseForm";

export default function DashboardPage() {
  const session = useSession();
  return (
    <>
      {!!session.data ? (
        <h1 className="text-4xl font-bold text-primary-focus">{`${session.data.user.name}'s Dashboard`}</h1>
      ) : (
        <p>Please login to view your dashboard</p>
      )}
      {/* <NewDoseForm /> */}
    </>
  );
}
