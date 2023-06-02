import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";

type SidebarProps = {
  navIsOpen: boolean;
  setNavIsOpen: (navIsOpen: boolean) => void;
};

const Sidebar = ({ navIsOpen, setNavIsOpen }: SidebarProps) => {
  const router = useRouter();
  return (
    <>
      <Transition
        as={Fragment}
        show={navIsOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onClick={() => setNavIsOpen(false)}
          className="fixed inset-0 z-20 bg-gray-500 bg-opacity-75 transition-opacity md:pointer-events-none md:hidden"
        />
      </Transition>
      <aside
        className={`${
          navIsOpen ? "" : "-translate-x-full"
        } fixed bottom-0 left-0 top-0 z-[21] flex w-1/2 flex-col items-center justify-start bg-base-100/50 p-2 pt-4 shadow-md backdrop-blur-md transition delay-75 ease-in md:bottom-2 md:left-2 md:top-16 md:h-auto md:w-36 md:-translate-x-0 md:rounded md:bg-base-100/40 md:pt-2`}
      >
        <div
          onClick={() => setNavIsOpen(false)}
          className="flex items-center justify-between"
        >
          <button
            onClick={() => {
              setNavIsOpen(false);
              void router.push("/dashboard");
            }}
            className={`${
              navIsOpen ? "opacity-100" : "opacity-0"
            } text-2xl font-bold normal-case text-primary-600 transition delay-200 md:hidden`}
          >
            kindMind
          </button>
          <button
            onClick={() => setNavIsOpen(!navIsOpen)}
            className="absolute right-2 top-2 flex rounded text-primary-600 transition md:hidden"
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
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`mt-4 flex w-full flex-col items-center justify-center gap-2 transition delay-200 md:mt-0 md:gap-0 md:opacity-100 ${
            navIsOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <li className="col-span-4 w-full md:mb-2">
            <button
              onClick={() => {
                setNavIsOpen(false);
                void router.push("/dashboard");
              }}
              className="m-auto flex w-36 justify-center rounded p-2 text-center text-sm font-semibold uppercase leading-normal transition hover:bg-primary-500 hover:text-white active:bg-primary-600 md:w-auto md:w-full md:justify-between md:text-xs"
              // href="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-1/4 md:h-4"
                // width="32"
                // height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"
                />
              </svg>
              <span className="w-3/4 text-left">Dashboard</span>
            </button>
          </li>
          <li className="col-span-4 w-full md:mb-2">
            <button
              onClick={() => {
                setNavIsOpen(false);
                void router.push("/calendar");
              }}
              className="m-auto flex w-36 justify-center rounded p-2 text-center text-sm font-semibold uppercase leading-normal transition hover:bg-primary-500 hover:text-white active:bg-primary-600 md:w-auto md:w-full md:justify-between md:text-xs"
              // href="/calendar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-1/4 md:h-4"
                // width="32"
                // height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 14q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z"
                />
              </svg>
              <span className="w-3/4 text-left">Calendar</span>
            </button>
          </li>
          <li className="col-span-4 w-full md:mb-2">
            <button
              onClick={() => {
                setNavIsOpen(false);
                void router.push("/journal");
              }}
              className="m-auto flex w-36 justify-center rounded p-2 text-center text-sm font-semibold uppercase leading-normal transition hover:bg-primary-500 hover:text-white active:bg-primary-600 md:w-auto md:w-full md:justify-between md:text-xs"
              // href="/journal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-5 w-1/4 md:h-4"
                // width="32"
                // height="32"
                viewBox="0 0 16 16"
              >
                <g fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083L6.757 8.43A.5.5 0 0 1 6 8V1z"
                  />
                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                </g>
              </svg>
              <span className="w-3/4 text-left">Journal</span>
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};
export default Sidebar;
