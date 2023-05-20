import { add, eachDayOfInterval, format, isToday, set } from "date-fns";
import { useState } from "react";

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

  const [selectedWeek, setSelectedWeek] = useState(daysOfCurrentWeek);

  const previousWeek = () => {
    const firstDayPreviousWeek = add(selectedWeek[0] || today, { weeks: -1 });
    const lastDayPreviousWeek = add(selectedWeek[6] || today, { weeks: -1 });

    setSelectedWeek(
      eachDayOfInterval({
        start: firstDayPreviousWeek,
        end: lastDayPreviousWeek,
      })
    );
  };

  const nextWeek = () => {
    const firstDayNextWeek = add(selectedWeek[0] || today, { weeks: 1 });
    const lastDayNextWeek = add(selectedWeek[6] || today, { weeks: 1 });

    setSelectedWeek(
      eachDayOfInterval({
        start: firstDayNextWeek,
        end: lastDayNextWeek,
      })
    );
  };

  const goToCurrentWeek = () => {
    setSelectedWeek(daysOfCurrentWeek);
  };

  return (
    <section className="w-full rounded bg-base-100/40 p-2 shadow sm:p-4 md:w-1/2 lg:w-full xl:w-1/2">
      <h2 className="mb-4 text-2xl font-semibold text-primary-500">
        This Week At a Glance
      </h2>
      <div className="mb-2 flex items-center justify-between">
        <div className="grid grid-cols-2 gap-1">
          <button
            onClick={previousWeek}
            type="button"
            className="col-span-1 rounded border border-primary-500 p-2"
          >
            <span className="sr-only">Previous month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"1rem"}
              height={"1rem"}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              ></path>
            </svg>
          </button>
          <button
            onClick={nextWeek}
            type="button"
            className="col-span-1 rounded border border-primary-500 p-2"
          >
            <span className="sr-only">Next month</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"1rem"}
              height={"1rem"}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m8.25 4.5l7.5 7.5l-7.5 7.5"
              ></path>
            </svg>
          </button>
        </div>
        <button
          onClick={goToCurrentWeek}
          type="button"
          className="rounded border border-primary-500 p-2 "
        >
          <span className="">Go to current week</span>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 rounded">
        {selectedWeek.map((day, i) => {
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
