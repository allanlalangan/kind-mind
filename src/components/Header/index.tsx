import Link from "next/link";

type HeaderProps = {
  navIsOpen: boolean;
  setNavIsOpen: (isOpen: boolean) => void;
};

export default function Header({ navIsOpen, setNavIsOpen }: HeaderProps) {
  return (
    <header className="mb-4 rounded-lg bg-neutral-100 p-2 shadow-sm">
      <section>
        <Link
          href="/"
          className="btn-ghost btn text-2xl normal-case text-primary"
        >
          kindMind
        </Link>
      </section>
      <nav className="flex px-4">
        <Link className="mr-2 underline" href="/calendar">
          Calendar
        </Link>
        <Link className="mr-2 underline" href="/journal">
          Journal
        </Link>
      </nav>
    </header>
  );
}
