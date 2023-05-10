"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  return (
    <header className="fixed left-2 right-2 top-2 col-span-12 row-span-1 flex items-center justify-between rounded-lg bg-neutral-100 p-2 shadow-sm md:static md:justify-between">
      <Link
        href="/"
        className="btn-ghost btn mx-2 text-2xl normal-case text-primary"
      >
        kindMind
      </Link>
      {!!session.data ? (
        <section className="flex items-center">
          <button
            onClick={() => void signOut({ callbackUrl: "/login" })}
            className="btn-ghost btn-sm btn mx-2"
          >
            Logout
          </button>
          <button className="btn-circle btn">
            <Image
              className="rounded-full"
              alt={`${session?.data?.user?.name || "user"}'s avatar`}
              src={session?.data?.user?.image || ""}
              width={200}
              height={200}
            />
          </button>
        </section>
      ) : (
        <Link href="/login" className="btn-ghost btn-sm btn mx-2">
          Login
        </Link>
      )}
    </header>
  );
}
