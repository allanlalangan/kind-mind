import { useEffect, useState } from "react";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("");
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    console.log(window);

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -3)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;

      if (scrollY === 0) {
        setIsScrolledToTop(true);
      }

      if (scrollY > 0) {
        setIsScrolledToTop(false);
      }
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);
  return (
    <>
      <Header
        isScrolledToTop={isScrolledToTop}
        scrollDirection={scrollDirection}
        navIsOpen={navIsOpen}
        setNavIsOpen={setNavIsOpen}
      />
      <Sidebar setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
      <main className="min-h-screen w-full rounded bg-base-100/40 p-4 shadow-md md:fixed md:bottom-2 md:left-40 md:right-2 md:top-16 md:h-auto md:min-h-0 md:w-auto md:overflow-y-scroll">
        {children}
      </main>
    </>
  );
}
