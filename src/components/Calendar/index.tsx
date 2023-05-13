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

type CalendarProps = {
  firstDayCurrentMonth: Date;
  days: Date[];
  events: EventType[];
  previousMonth: () => void;
  nextMonth: () => void;
  selectedDay: Date;
  setSelectedDay: (date: Date) => void;
};

const Calendar = ({
  firstDayCurrentMonth,
  days,
  events,
  previousMonth,
  nextMonth,
  selectedDay,
  setSelectedDay,
}: CalendarProps) => {
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
      <div className="l mt-2 grid min-h-[50vh] grid-cols-7 rounded-b bg-base-100/40 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "h-full w-full py-1.5"
            )}
          >
            <button
              type="button"
              onClick={() => setSelectedDay(day)}
              className={classNames(
                isEqual(day, selectedDay) && !isToday(day) && "bg-primary-300",
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
                isEqual(day, selectedDay) &&
                  isToday(day) &&
                  "bg-secondary-500 text-white",
                isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  "bg-primary-focus",
                !isEqual(day, selectedDay) && "hover:bg-primary-300/50",
                (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
            <div className="mx-auto mt-1 h-1 w-1">
              {events.some((meeting) =>
                isSameDay(parseISO(meeting.startDatetime), day)
              ) && (
                <div className="h-1 w-1 rounded-full bg-secondary-600"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
};

export default Calendar;
