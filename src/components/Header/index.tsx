"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import UserOptionsDropdown from "../UserOptionsDropdown";

type HeaderProps = {
  navIsOpen: boolean;
  setNavIsOpen: (navIsOpen: boolean) => void;
};

export default function Header({ navIsOpen, setNavIsOpen }: HeaderProps) {
  const session = useSession();
  return (
    <header className="fixed left-2 right-2 top-2 z-10 flex">
      <section className="static flex w-full items-center justify-between rounded bg-base-100/40 p-2 shadow-md backdrop-blur-md md:px-4">
        <Link
          href="/"
          className={`text-2xl font-bold normal-case text-primary-600 transition md:opacity-100 ${
            navIsOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          kindMind
        </Link>
        <button
          onClick={() => setNavIsOpen(!navIsOpen)}
          className={`${
            navIsOpen ? " bg-primary-500 text-white" : ""
          } ml-4 flex rounded text-primary-600 transition md:hidden`}
        >
          {navIsOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M15.79 14.77a.75.75 0 0 1-1.06.02l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 1 1 1.04 1.08L11.832 10l3.938 3.71a.75.75 0 0 1 .02 1.06Zm-6 0a.75.75 0 0 1-1.06.02l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 1 1 1.04 1.08L5.832 10l3.938 3.71a.75.75 0 0 1 .02 1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </button>
        {!session?.data?.user && (
          <Link
            href="/login"
            className="w-full px-2 text-right underline underline-offset-2 transition hover:text-primary-600"
          >
            Login
          </Link>
        )}
      </section>
      {!!session?.data?.user && <UserOptionsDropdown />}
    </header>
  );
}
