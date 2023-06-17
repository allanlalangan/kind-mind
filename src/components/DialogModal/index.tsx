import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
type DialogModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  requireConfirmationOnRouteChange?: boolean;
};

export default function DialogModal({
  children,
  isOpen,
  handleClose,
}: DialogModalProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="section"
        className="fixed inset-0 z-10 flex items-start justify-center overflow-y-auto p-2 md:items-center"
        onClose={() => handleClose()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Backdrop
            as="div"
            className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          {
            <Dialog.Panel
              as="section"
              className="w-full transform rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg"
            >
              {children}
            </Dialog.Panel>
          }
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
