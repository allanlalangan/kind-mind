import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import DialogModal from "../DialogModal";
import LoadingSpinner from "../LoadingSpinner";

export default function UserOptionsDropdown() {
  const session = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cancelLogoutButton = useRef(null);

  return (
    <div className="top-16 z-20 ml-2 flex w-16 items-center justify-center rounded bg-base-100/40 text-right shadow-md">
      <Menu as="div" className="relative flex flex-col items-end text-left">
        <Menu.Button className="flex w-full justify-center rounded-full shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 active:scale-95 active:shadow-none">
          <Image
            className="h-10 w-10 rounded-full"
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
                    className={`${
                      active
                        ? "bg-base-100/50 text-secondary-700"
                        : "text-secondary-800"
                    } group flex w-full items-center rounded px-2 py-2 text-sm transition`}
                    onClick={() => setModalIsOpen(true)}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <DialogModal
        isOpen={modalIsOpen}
        handleClose={() => setModalIsOpen(false)}
        requireConfirmationOnRouteChange={false}
      >
        <h3 className="p-4 text-base font-semibold leading-6 text-gray-900">
          Logout
        </h3>
        <p className="p-8 text-sm text-gray-500">
          Are you sure you want to logout?
        </p>
        <div className="w-full bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            disabled={isLoggingOut}
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-1/4"
            onClick={() => {
              setIsLoggingOut(true);
              void signOut({ callbackUrl: "/login" });
            }}
            ref={cancelLogoutButton}
          >
            {isLoggingOut ? <LoadingSpinner size={20} /> : <>Logout</>}
          </button>
          <button
            disabled={isLoggingOut}
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-1/4"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </DialogModal>
    </div>
  );
}
