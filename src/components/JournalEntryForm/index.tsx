import TextEditor from "../TextEditor";

function JournalEntryForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault}
      className="col-span-6 flex flex-col rounded-lg bg-base-100 p-8"
    >
      <h2 className="mb-2 rounded-md bg-neutral-100 p-4 text-2xl font-semibold text-primary shadow-sm">
        New Journal Entry
      </h2>
      <fieldset className="grid grid-cols-12 gap-4 px-4">
        <legend className="py-2 text-lg font-semibold tracking-wide">
          Category
        </legend>
        <p className="col-span-6 mb-4 flex w-full flex-col">
          <label
            className="pb-1 text-xs uppercase tracking-wide"
            htmlFor="newCategory"
          >
            Create Category
          </label>
          <span className="input-group-sm input-group flex w-full">
            <input
              placeholder="Add a new category"
              className="input-primary input input-sm w-3/4 bg-secondary"
              type="text"
              name="newCategory"
              id="newCategory"
            />
            <button className="btn-primary btn-sm btn w-1/4">Add</button>
          </span>
        </p>
        <p className="col-span-6 flex w-full flex-col">
          <label
            className="pb-1 text-xs uppercase tracking-wide"
            htmlFor="newCategory"
          >
            Select Category
          </label>

          <select
            className="select-primary select select-sm w-full bg-secondary"
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
        <label
          className="py-2 text-lg font-semibold tracking-wide"
          htmlFor="body"
        >
          Entry Text
        </label>
        <TextEditor />
      </p>
      <button type="submit" className="btn-primary btn mx-4 my-auto">
        Create New Entry
      </button>
    </form>
  );
}

export default JournalEntryForm;
