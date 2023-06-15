import { useState } from "react";
import DialogModal from "../DialogModal";
import NewDoseForm from "../NewDoseForm";

export default function CreateEvent() {
  const [doseModalIsOpen, setDoseModalIsOpen] = useState(false);
  const [activityModalIsOpen, setActivityModalIsOpen] = useState(false);
  return (
    <section className="col-span-12 row-span-1 p-8 md:col-span-6 lg:col-start-7">
      <h2 className="mb-2 font-semibold uppercase tracking-wider">
        Create New Event
      </h2>
      <div className="grid grid-cols-12 gap-2">
        <button
          type="button"
          onClick={() => setActivityModalIsOpen(true)}
          className="col-span-6 flex w-full justify-center rounded bg-base-100/40 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal tracking-wide transition hover:bg-accent-300 active:bg-accent-400"
        >
          Add Activity
        </button>
        <button
          onClick={() => setDoseModalIsOpen(true)}
          className="col-span-6 flex w-full justify-center rounded bg-base-100/40 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal tracking-wide transition hover:bg-accent-300 active:bg-accent-400"
        >
          Add Dose
        </button>
      </div>
      <DialogModal
        isOpen={doseModalIsOpen}
        handleClose={() => setDoseModalIsOpen(false)}
        requireConfirmationOnRouteChange={false}
      >
        <NewDoseForm />
        <div className="w-full bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-1/4"
            onClick={() => setDoseModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </DialogModal>
      <DialogModal
        isOpen={activityModalIsOpen}
        handleClose={() => setActivityModalIsOpen(false)}
        requireConfirmationOnRouteChange={false}
      >
        <h3>New Activity</h3>
        <div className="w-full bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-1/4"
            onClick={() => setActivityModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </DialogModal>
    </section>
  );
}
