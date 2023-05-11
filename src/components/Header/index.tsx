"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  return (
    <header className="fixed left-2 right-2 top-2 z-10 col-span-12 row-span-1 flex items-center justify-between rounded bg-base-100/40 p-2 shadow backdrop-blur-md md:static md:justify-between">
      <Link href="/" className="text-primary mx-2 text-2xl normal-case">
        kindMind
      </Link>
      {!!session.data ? (
        <section className="flex items-center">
          <button
            onClick={() => void signOut({ callbackUrl: "/login" })}
            className="mx-2"
          >
            Logout
          </button>
          <button className="rounded-full">
            <Image
              className="h-8 w-8 rounded-full"
              alt={`${session?.data?.user?.name || "user"}'s avatar`}
              src={session?.data?.user?.image || ""}
              width={100}
              height={100}
            />
          </button>
        </section>
      ) : (
        <Link href="/login" className="mx-2">
          Login
        </Link>
      )}
    </header>
  );
}
