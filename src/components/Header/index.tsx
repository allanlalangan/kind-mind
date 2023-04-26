import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-4 flex items-center rounded-lg bg-neutral-100 p-2 shadow-sm">
      <span className="dropdown">
        <button tabIndex={0} className="btn-ghost btn-circle btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content menu menu-compact mt-3 w-52 rounded-md bg-neutral-100 p-2 shadow"
        >
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/calendar">Calendar</Link>
          </li>
          <li>
            <Link href="/journal">Journal</Link>
          </li>
        </ul>
      </span>

      <Link
        href="/"
        className="btn-ghost btn text-2xl normal-case text-primary"
      >
        kindMind
      </Link>
      <span className="dropdown">
        <button className="btn-ghost btn-circle btn">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge-primary badge badge-sm indicator-item"></span>
          </div>
        </button>
        <section
          tabIndex={0}
          className="dropdown-content menu menu-compact mt-3 w-60 rounded-md bg-neutral-100 p-2 px-4 shadow"
        >
          <span>No new notifications</span>
        </section>
      </span>
      <Link className="btn-ghost btn" href="/login">
        Login
      </Link>
    </header>
  );
}
