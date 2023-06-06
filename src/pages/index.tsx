import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  if (!!session.data) {
    router.push("/dashboard");
  }
  return (
    <>
      <main className="flex flex-col items-center rounded p-8">
        <Link
          href="/"
          className="text-4xl font-bold normal-case text-primary-800"
        >
          kindMind
        </Link>
        <p className="">Journal and Habit Tracker</p>
        <Link
          href="/login"
          className="px-2 font-medium underline underline-offset-2 transition hover:text-primary-800"
        >
          Login
        </Link>
        {!session?.data?.user && (
          <Link
            href="/dashboard"
            className="px-2 font-medium underline underline-offset-2 transition hover:text-primary-800"
          >
            Continue as guest
          </Link>
        )}
      </main>
    </>
  );
};

export default Home;
