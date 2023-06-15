import {
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
} from "date-fns";

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function classNames(...classes: (false | string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

import type { Event as EventType } from "~/components/Event";

type MonthlyViewProps = {
  firstDayCurrentMonth: Date;
  days: Date[];
  events: EventType[];
  previousMonth: () => void;
  nextMonth: () => void;
  selectedDay: Date;
  setSelectedDay: (date: Date) => void;
};

const MonthlyView = ({
  firstDayCurrentMonth,
  days,
  events,
  previousMonth,
  nextMonth,
  selectedDay,
  setSelectedDay,
}: MonthlyViewProps) => {
  return (
    <figure className="col-span-12 row-span-2 flex flex-col rounded bg-base-100/40 p-2 shadow sm:p-4 lg:col-span-6">
      <div className="flex items-center rounded bg-base-100/40 p-4 shadow">
        <h2 className="flex-auto text-2xl font-semibold text-primary-500">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <button
          type="button"
          onClick={previousMonth}
          className="btn-ghost btn-circle btn"
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
          onClick={nextMonth}
          type="button"
          className="btn-ghost btn-circle btn"
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
      <div className="mt-10 grid grid-cols-7 rounded-t bg-primary-500 py-1 text-center font-semibold leading-6 text-white">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="mt-2 grid min-h-[50vh] grid-cols-7 gap-1 rounded-b bg-base-100/40 p-2 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              !isEqual(day, selectedDay) &&
                isToday(day) &&
                "text-secondary-500",
              !isEqual(day, selectedDay) &&
                !isToday(day) &&
                isSameMonth(day, firstDayCurrentMonth) &&
                "text-neutral-900",
              !isEqual(day, selectedDay) &&
                !isToday(day) &&
                !isSameMonth(day, firstDayCurrentMonth) &&
                "text-neutral-400",

              isEqual(day, selectedDay) && !isToday(day) && "bg-primary-focus",
              (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
              "flex h-28 w-full flex-col items-center rounded border border-primary-300"
            )}
          >
            <button
              type="button"
              onClick={() => setSelectedDay(day)}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                isEqual(day, selectedDay) &&
                  isToday(day) &&
                  "border-secondary-500 bg-secondary-500 text-white",
                isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  "border-primary-300 bg-primary-300",
                !isEqual(day, selectedDay) &&
                  "border-primary-300 hover:bg-primary-300/50",
                "group flex w-full flex-col items-center justify-center rounded-t-sm border-b"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>

            {events.some((meeting) =>
              isSameDay(parseISO(meeting.startDatetime), day)
            ) && (
              <button
                type="button"
                className="my-1 h-2 w-3/4 bg-secondary-300"
              ></button>
            )}
          </div>
        ))}
      </div>
    </figure>
  );
};

export default MonthlyView;
