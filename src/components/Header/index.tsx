"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import UserOptionsDropdown from "../UserOptionsDropdown";

export default function Header() {
  const session = useSession();
  return (
    <header className="fixed left-2 right-2 top-2 z-10 flex">
      <section className="static flex w-full items-center justify-between rounded bg-base-100/40 p-2 shadow-md backdrop-blur-md md:justify-between md:px-4">
        <Link
          href="/"
          className="text-2xl font-bold normal-case text-primary-600"
        >
          kindMind
        </Link>

        {!session?.data?.user && (
          <Link
            href="/login"
            className="px-2 underline underline-offset-2 transition hover:text-primary-600"
          >
            Login
          </Link>
        )}
      </section>
      {!!session?.data?.user && <UserOptionsDropdown />}
    </header>
  );
}
