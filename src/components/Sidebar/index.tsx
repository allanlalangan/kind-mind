import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed bottom-2 left-2 right-2 flex h-12 flex-col items-center justify-center rounded-lg bg-base-100 p-2 shadow md:top-20 md:h-auto md:w-28 md:justify-start">
      <ul className="flex items-center md:flex-col">
        <li>
          <Link
            className="btn-ghost btn-xs btn tracking-wide md:mb-2"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className="btn-ghost btn-xs btn tracking-wide md:mb-2"
            href="/calendar"
          >
            Calendar
          </Link>
        </li>
        <li>
          <Link
            className="btn-ghost btn-xs btn tracking-wide md:mb-2"
            href="/journal"
          >
            Journal
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
