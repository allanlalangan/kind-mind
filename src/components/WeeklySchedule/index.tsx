import { eachDayOfInterval, format, isToday } from "date-fns";

function classNames(...classes: (false | string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function WeeklySchedule() {
  const today = new Date(); // get current date
  const startDate = today.getDate() - today.getDay(); // First day is the day of the month - the day of the week
  const endDate = startDate + 6; // last day is the first day + 6

  const firstDayOfWeek = new Date(today.setDate(startDate));
  const lastDayOfWeek = new Date(today.setDate(endDate));

  const daysOfCurrentWeek = eachDayOfInterval({
    start: firstDayOfWeek,
    end: lastDayOfWeek,
  });

  console.log(daysOfCurrentWeek);
  return (
    <section className="w-full rounded bg-base-100/40 p-2 shadow sm:p-4 md:w-1/2 lg:w-full xl:w-1/2">
      <h2 className="mb-4 text-2xl font-semibold text-primary-500">
        This Week At a Glance
      </h2>
      <div className="grid grid-cols-7 gap-2 rounded">
        {daysOfCurrentWeek.map((day, i) => {
          return (
            <button
              className={classNames(
                isToday(day)
                  ? "bg-secondary-300/40 shadow-secondary-500/50 hover:bg-secondary-500 hover:text-white hover:shadow-lg hover:shadow-secondary-500/50"
                  : "bg-base-100/40 hover:bg-accent-100",
                i === 0 && "rounded-t lg:rounded-l lg:rounded-tr-none",
                i === 6 && "rounded-b lg:rounded-r lg:rounded-bl-none",
                "col-span-12 flex flex-col p-2 shadow transition lg:col-span-1 lg:items-center"
              )}
              key={day.toString()}
            >
              <p className="truncate">{format(day, "EE")}</p>
              <p className="truncate">{format(day, "MMM dd")}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
