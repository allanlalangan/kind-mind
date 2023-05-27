import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DialogModal from "../DialogModal";
import Link from "next/link";
import { api } from "~/utils/api";

type EntryActionsDropdownMenuProps = {
  id: string;
  refetchEntries: () => void;
};

export default function EntryActionsDropdownMenu({
  id,
  refetchEntries,
}: EntryActionsDropdownMenuProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteEntry = api.entries.deleteEntry.useMutation({
    onSuccess: () => {
      console.log(`delete entry ${id} success}`);
      refetchEntries();
    },
  });

  const onDelete = () => {
    deleteEntry.mutate({
      id,
    });
    setModalIsOpen(false);
  };

  return (
    <>
      <Menu
        as="div"
        className="bg-accent-40 relative flex flex-col items-end rounded-full border border-primary-500 p-1 text-left font-medium uppercase tracking-wide text-primary-500 transition"
      >
        <Menu.Button className="flex h-6 w-6 justify-center rounded-full text-primary-500 shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 active:scale-95 active:shadow-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M3 10a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm5.5 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm7-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
            />
          </svg>
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
          <Menu.Items className="absolute right-1 top-7 z-10 mt-2 w-36 origin-top-right divide-y divide-base-100 rounded bg-base-100/40 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-md focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={`/journal/entry/${id}?edit`}
                    className={`${
                      active
                        ? "bg-base-100/50 text-primary-500"
                        : "text-base-900"
                    } group flex w-full items-center rounded px-2 py-2 text-sm normal-case transition`}
                  >
                    Edit
                  </Link>
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
                    Delete
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
          Delete Entry
        </h3>
        <p className="p-8 text-sm text-gray-500">
          Are you sure you want to delete this entry? This action cannot be
          undone.
        </p>
        <div className="w-full bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-1/4"
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-1/4"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </DialogModal>
    </>
  );
}
