import TextEditor from "../TextEditor";

function JournalEntryForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="col-span-12 flex flex-col rounded bg-base-100/40 p-2 sm:p-4 lg:col-span-6 xl:p-8"
    >
      <h2 className="mb-2 rounded bg-base-100/40 p-4 text-2xl font-semibold text-primary-500 shadow">
        New Journal Entry
      </h2>
      <fieldset className="grid grid-cols-12 gap-4 px-4">
        <legend className="py-2">Category</legend>
        <p className="col-span-6 mb-4 flex w-full flex-col">
          <label className="pb-1 text-xs uppercase" htmlFor="newCategory">
            Create Category
          </label>
          <span className="input-group-sm input-group flex w-full">
            <input
              placeholder="Add a new category"
              className="w-3/4 rounded-l py-2 pl-2 text-sm"
              type="text"
              name="newCategory"
              id="newCategory"
            />
            <button className="col-span-6 flex w-1/4 items-center justify-center rounded-r bg-primary-500 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition hover:bg-primary-600 active:bg-primary-700">
              Add
            </button>
          </span>
        </p>
        <p className="col-span-6 flex w-full flex-col">
          <label className="pb-1 text-xs uppercase" htmlFor="newCategory">
            Select Category
          </label>

          <select
            className="w-full rounded py-2 pl-2 text-sm"
            name="category"
            id="category"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </p>
      </fieldset>
      <p className="mb-4 flex w-full flex-col px-4">
        <label className="py-2" htmlFor="body">
          Entry Text
        </label>
        <TextEditor />
      </p>
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
