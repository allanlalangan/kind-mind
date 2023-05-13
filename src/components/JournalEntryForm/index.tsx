import TextEditor from "../TextEditor";

function JournalEntryForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="col-span-12 flex flex-col rounded bg-base-100/40 p-2 sm:p-4 lg:col-span-6"
    >
      <input
        className="mb-2 rounded bg-base-100/40 p-4 text-2xl font-semibold text-primary-500 shadow placeholder:font-semibold placeholder:text-primary-500/50"
        placeholder="Journal Entry Title"
        type="text"
        name="title"
        id="title"
      />
      <div className="mb-4 flex w-full flex-col">
        <label className="hidden py-2" htmlFor="body">
          Entry Text
        </label>
        <TextEditor />
      </div>
      <button
        type="submit"
        className="col-span-6 flex w-full items-center justify-center rounded bg-primary-500 px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white transition hover:bg-primary-600 active:bg-primary-700"
      >
        Create New Entry
      </button>
    </form>
  );
}

export default JournalEntryForm;
