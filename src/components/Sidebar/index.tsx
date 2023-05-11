import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed bottom-2 left-2 right-2 z-10 flex h-12 flex-col items-center justify-center rounded bg-base-100/40 p-2 shadow-md backdrop-blur-md md:top-16 md:h-auto md:w-36 md:justify-start">
      <ul className="grid w-full grid-cols-12 items-center justify-center gap-2 md:flex md:flex-col md:gap-0">
        <li className="col-span-4 md:mb-2 md:w-full">
          <Link
            className="flex w-full justify-center rounded p-2 text-center text-xs font-semibold uppercase leading-normal transition hover:bg-primary-500 hover:text-white active:bg-primary-600 md:justify-between"
            href="/dashboard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 md:w-1/4"
              // width="32"
              // height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13 9V3h8v6h-8ZM3 13V3h8v10H3Zm10 8V11h8v10h-8ZM3 21v-6h8v6H3Z"
              />
            </svg>
            <span className="md:w-3/4 md:text-left">Dashboard</span>
          </Link>
        </li>
        <li className="col-span-4 md:mb-2 md:w-full">
          <Link
            className="flex w-full justify-center rounded p-2 text-center text-xs font-semibold uppercase leading-normal transition hover:bg-primary-500 hover:text-white active:bg-primary-600 md:justify-between"
            href="/calendar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 md:w-1/4"
              // width="32"
              // height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 14q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z"
              />
            </svg>
            <span className="md:w-3/4 md:text-left">Calendar</span>
          </Link>
        </li>
        <li className="col-span-4 md:mb-2 md:w-full">
          <Link
            className="flex w-full justify-center rounded p-2 text-center text-xs font-semibold uppercase leading-normal transition hover:bg-primary-500 hover:text-white active:bg-primary-600 md:justify-between"
            href="/journal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 md:w-1/4"
              // width="32"
              // height="32"
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083L6.757 8.43A.5.5 0 0 1 6 8V1z"
                />
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
              </g>
            </svg>
            <span className="md:w-3/4 md:text-left">Journal</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
