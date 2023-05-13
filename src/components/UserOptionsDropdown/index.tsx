import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function UserOptionsDropdown() {
  const session = useSession();
  return (
    <div className="top-16 z-20 ml-2 flex w-fit items-center rounded bg-base-100/40 px-2 text-right shadow-md">
      <Menu as="div" className="relative flex flex-col items-end text-left">
        <Menu.Button className="flex w-fit justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <Image
            className="h-8 w-8 rounded-full"
            alt={`${session?.data?.user?.name || "user"}'s avatar`}
            src={session?.data?.user?.image || ""}
            width={100}
            height={100}
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-2 top-10 z-10 mt-2 w-36 origin-top-right divide-y divide-base-100 rounded bg-base-100/40 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-md focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-base-100/50 text-primary-500"
                        : "text-base-900"
                    } group flex w-full items-center rounded px-2 py-2 text-sm transition`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => void signOut({ callbackUrl: "/login" })}
                    className={`${
                      active
                        ? "bg-base-100/50 text-secondary-700"
                        : "text-secondary-800"
                    } group flex w-full items-center rounded px-2 py-2 text-sm transition`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
