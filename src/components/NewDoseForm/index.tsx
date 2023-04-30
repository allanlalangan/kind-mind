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
    <form className="col-span-12 flex flex-col rounded-lg bg-base-100 p-2 sm:p-4 lg:col-span-8 xl:p-8">
      <h3 className="mb-2 rounded-md bg-neutral-100 p-4 text-2xl font-semibold text-primary shadow-sm">
        Schedule New Dose
      </h3>
      <p className="col-span-6 mb-8 flex h-fit flex-col">
        <label className="text-lg tracking-wide" htmlFor="name">
          Name
        </label>
        <input
          className="input-primary input bg-secondary"
          type="text"
          name="name"
          id="name"
        />
      </p>
      <fieldset className="col-span-12 mb-8 grid grid-cols-2 gap-2">
        <legend className="text-lg tracking-wide">Type</legend>

        <label
          className="col-span-1 flex cursor-pointer items-center justify-evenly"
          htmlFor="supplement"
        >
          <input
            id="supplement"
            className="radio-primary radio"
            type="radio"
            name="type"
            value="supplement"
          />
          <span className="label">Supplement</span>
        </label>

        <label
          className="col-span-1 flex cursor-pointer items-center justify-evenly"
          htmlFor="medication"
        >
          <input
            id="medication"
            className="radio-primary radio"
            type="radio"
            name="type"
            value="medication"
          />
          <span className="label">Medication</span>
        </label>
      </fieldset>
      <p className="col-span-6 mb-8 flex h-fit flex-col">
        <label className="text-lg tracking-wide" htmlFor="description">
          Description
        </label>
        <input
          className="input-primary input bg-secondary"
          type="text"
          name="description"
          id="description"
        />
      </p>

      <fieldset className="col-span-12 grid grid-cols-12 gap-4 px-4">
        <legend className="-mx-4 text-lg tracking-wide">Schedule</legend>

        <section className="col-span-6 flex flex-col">
          <p className="col-span-6 mb-8 flex h-fit flex-col">
            <label className="text-sm tracking-wide" htmlFor="startDate">
              Start Date
            </label>
            <input
              className="input-primary input bg-secondary"
              type="date"
              name="startDate"
              id="startDate"
            />
          </p>
          <p className="col-span-6 mb-8 flex h-fit flex-col">
            <label className="text-sm tracking-wide" htmlFor="endDate">
              End Date (optional)
            </label>
            <input
              className="input-primary input bg-secondary"
              type="date"
              name="endDate"
              id="endDate"
            />
          </p>
        </section>
        <section className="col-span-6 flex flex-col">
          <h3>Recurring Days</h3>
          {weekdays.map((day, i) => (
            <div key={i} className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">{day}</span>
                <input type="checkbox" className="checkbox-primary checkbox" />
              </label>
            </div>
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
