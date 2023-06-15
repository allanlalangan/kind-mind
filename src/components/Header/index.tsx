"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import UserOptionsDropdown from "../UserOptionsDropdown";

type HeaderProps = {
  scrollDirection: string;
  navIsOpen: boolean;
  setNavIsOpen: (navIsOpen: boolean) => void;
  isScrolledToTop: boolean;
};

export default function Header({
  scrollDirection,
  navIsOpen,
  setNavIsOpen,
  isScrolledToTop,
}: HeaderProps) {
  const session = useSession();
  return (
    <header
      className={`sticky z-[9] mb-2 flex rounded shadow-md transition-all md:fixed md:left-2 md:right-2 md:top-2 md:mb-0 md:bg-transparent md:shadow-none ${
        scrollDirection === "down" ? "-top-full" : ""
      } ${scrollDirection === "up" ? "top-0" : ""} ${
        isScrolledToTop ? "" : "bg-base-100"
      }`}
    >
      <section className="static flex w-full items-center rounded-l bg-base-100/40 p-2 backdrop-blur-md md:justify-start md:rounded md:px-4 md:shadow-md">
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
            navIsOpen ? "hidden bg-primary-500 text-white" : ""
          } ml-2 flex rounded text-primary-600 transition md:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </section>
      {!session?.data?.user && (
        <Link
          href="/login"
          className="flex items-center justify-center rounded-r bg-base-100/40 px-2 text-right underline underline-offset-2 transition hover:text-primary-600 md:ml-2 md:rounded"
        >
          Login
        </Link>
      )}
      {!!session?.data?.user && <UserOptionsDropdown />}
    </header>
  );
}
