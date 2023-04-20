import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import Event from "~/components/Event";
import { useState } from "react";

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Calendar({
  firstDayCurrentMonth,
  days,
  events,
  previousMonth,
  nextMonth,
  selectedDay,
  setSelectedDay,
}) {
  return (
    <figure className="col-span-6 row-span-2 flex flex-col rounded-lg bg-base-100 p-8 shadow">
      <div className="flex items-center rounded-md bg-neutral-100 p-4 shadow-sm">
        <h2 className="flex-auto text-2xl font-semibold text-gray-900">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <button
          type="button"
          onClick={previousMonth}
          className="btn-ghost btn-circle btn"
        >
          <span className="sr-only">Previous month</span>
          <HeroiconsChevronLeft size={1.5} />
        </button>
        <button
          onClick={nextMonth}
          type="button"
          className="btn-ghost btn-circle btn"
        >
          <span className="sr-only">Next month</span>
          <HeroiconsChevronRight size={1.5} />
        </button>
      </div>
      <div className="mt-10 grid grid-cols-7 rounded-t bg-primary py-1 text-center font-semibold leading-6 text-primary-content">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="mt-2 grid h-96 grid-cols-7 rounded-b border border-primary bg-neutral-100 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "py-1.5"
            )}
          >
            <button
              type="button"
              onClick={() => setSelectedDay(day)}
              className={classNames(
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) &&
                  isToday(day) &&
                  "text-accent-focus",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-900",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, selectedDay) &&
                  isToday(day) &&
                  "bg-accent-focus text-accent-content",
                isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  "bg-primary-focus",
                !isEqual(day, selectedDay) && "hover:bg-primary-content",
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
                <div className="h-1 w-1 rounded-full bg-accent-content"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

export default Calendar;

function HeroiconsChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size}rem`}
      height={`${props.size}rem`}
      viewBox="0 0 24 24"
      {...props}
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
  );
}

function HeroiconsChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size}rem`}
      height={`${props.size}rem`}
      viewBox="0 0 24 24"
      {...props}
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
  );
}
