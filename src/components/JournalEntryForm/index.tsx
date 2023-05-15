import TipTapEditor from "../TipTapEditor";

function JournalEntryForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="col-span-12 flex flex-col rounded"
    >
      <div className="mb-4 flex w-full flex-col">
        <label className="hidden py-2" htmlFor="body">
          Entry Text
        </label>
        <TipTapEditor />
      </div>
      {/* <button
        type="submit"
        className="col-span-6 mx-4 flex w-full items-center justify-center rounded bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white transition hover:bg-primary-600 active:bg-primary-700"
      >
        Create New Entry
      </button> */}
    </form>
  );
}

export default JournalEntryForm;
