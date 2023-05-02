import Link from "next/link";

type HeaderProps = {
  navIsOpen: boolean;
  setNavIsOpen: (isOpen: boolean) => void;
};

export default function Header({ navIsOpen, setNavIsOpen }: HeaderProps) {
  return (
    <header className="fixed left-2 right-2 top-2 col-span-12 row-span-1 flex items-center justify-center rounded-lg bg-neutral-100 p-2 shadow-sm md:static md:justify-start">
      <Link
        href="/"
        className="btn-ghost btn mx-2 text-2xl normal-case text-primary"
      >
        kindMind
      </Link>
    </header>
  );
}
