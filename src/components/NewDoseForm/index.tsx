const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const NewDoseForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col rounded-lg bg-base-100 p-2 sm:p-4 lg:w-1/3 xl:p-8"
    >
      <h3 className="mb-4 rounded-md bg-neutral-100 p-4 text-2xl font-semibold text-primary shadow-sm">
        Schedule Dose
      </h3>
      <p className="col-span-6 mb-4 flex flex-col">
        <label className="text-lg tracking-wider" htmlFor="name">
          Name
        </label>
        <input
          className="input-primary input input-sm bg-secondary"
          type="text"
          name="name"
          id="name"
        />
      </p>
      <fieldset className="col-span-12 mb-4 flex items-center justify-evenly">
        <legend className="text-lg tracking-wider">Type</legend>

        <label
          className="flex cursor-pointer items-center justify-evenly"
          htmlFor="supplement"
        >
          <input
            id="supplement"
            className="radio-primary radio"
            type="radio"
            name="type"
            value="supplement"
          />
          <span className="label ml-2">Supplement</span>
        </label>

        <label
          className="flex cursor-pointer items-center justify-evenly"
          htmlFor="medication"
        >
          <input
            id="medication"
            className="radio-primary radio"
            type="radio"
            name="type"
            value="medication"
          />
          <span className="label ml-2">Medication</span>
        </label>
      </fieldset>
      <p className="col-span-6 mb-4 flex flex-col">
        <label className="text-lg tracking-wider" htmlFor="description">
          Description
        </label>
        <input
          className="input-primary input input-sm bg-secondary"
          type="text"
          name="description"
          id="description"
        />
      </p>

      <fieldset className="flex w-full flex-col">
        <legend className="text-lg tracking-wider">Schedule</legend>

        <section className="col-span-12 flex flex-col">
          <p className="col-span-6 mb-4 flex flex-col">
            <label
              className="text-xs uppercase tracking-wide"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              className="input-primary input input-sm bg-secondary"
              type="date"
              name="startDate"
              id="startDate"
            />
          </p>
          <p className="col-span-6 mb-4 flex flex-col">
            <label
              className="text-xs uppercase tracking-wide"
              htmlFor="endDate"
            >
              End Date (optional)
            </label>
            <input
              className="input-primary input input-sm bg-secondary"
              type="date"
              name="endDate"
              id="endDate"
            />
          </p>
        </section>
        <section className="flex w-full flex-col">
          <h3 className="text-lg tracking-wider">Recurring Days</h3>
          {weekdays.map((day, i) => (
            <label
              key={i}
              className="flex cursor-pointer items-center justify-between p-2"
            >
              <span className="label-text">{day}</span>
              <input
                input-sm
                type="checkbox"
                className="checkbox-primary checkbox"
              />
            </label>
          ))}
        </section>
      </fieldset>
      <section className="col-span-12 mt-4 grid grid-cols-2 gap-2">
        <button className="btn-primary btn col-span-1">Add Dose</button>
        <button className="btn-primary btn col-span-1">Reset</button>
      </section>
    </form>
  );
};
export default NewDoseForm;
