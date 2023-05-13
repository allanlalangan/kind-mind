import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Calendar from "~/components/Calendar";
import DashboardLayout from "~/components/DashboardLayout";
import Event from "~/components/Event";
import WeeklySchedule from "~/components/WeeklySchedule";
import { type NextPageWithLayout } from "../_app";

const events = [
  {
    id: 1,
    name: "practice javascript",
    startDatetime: "2023-04-20T08:30",
    endDatetime: "2023-04-20T09:30",
  },
  {
    id: 2,
    name: "hoops sesh",
    startDatetime: "2023-04-20T17:00",
    endDatetime: "2023-04-20T19:00",
  },
  {
    id: 4,
    name: "work on projects",

    startDatetime: "2023-04-09T13:00",
    endDatetime: "2023-04-09T14:30",
  },
  {
    id: 5,
    name: "coffee chat",

    startDatetime: "2023-04-13T14:00",
    endDatetime: "2023-04-13T14:30",
  },
  {
    id: 6,
    name: "study",

    startDatetime: "2023-04-13T16:00",
    endDatetime: "2023-04-13T16:30",
  },
];

const CalendarPage: NextPageWithLayout = () => {
  const session = useSession();

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const selectedDayMeetings = events.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold text-primary-600">Calendar</h1>
      <WeeklySchedule />
      <section className="mt-4 grid grid-cols-12">
        <Calendar
          firstDayCurrentMonth={firstDayCurrentMonth}
          days={days}
          events={events}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        <section className="col-span-12 row-span-1 p-8 md:col-span-6">
          <h2 className="py-4 text-2xl font-semibold">
            Schedule for{" "}
            <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
              {format(selectedDay, "MMM dd, yyy")}
            </time>
          </h2>
          <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
            {selectedDayMeetings.length > 0 ? (
              selectedDayMeetings.map((meeting) => (
                <Event meeting={meeting} key={meeting.id} />
              ))
            ) : (
              <p>No events for today.</p>
            )}
          </ol>
        </section>
        <section className="col-span-12 row-span-1 p-8 md:col-span-6 lg:col-start-7">
          <h2 className="mb-2 font-semibold uppercase tracking-wider">
            Create New Event
          </h2>
          <div className="grid grid-cols-12 gap-2">
            <button className="col-span-6 flex w-full justify-center rounded bg-base-100/40 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal tracking-wide transition hover:bg-accent-300 active:bg-accent-400">
              Add Activity
            </button>
            <button className="col-span-6 flex w-full justify-center rounded bg-base-100/40 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal tracking-wide transition hover:bg-accent-300 active:bg-accent-400">
              Add Dose
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

CalendarPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CalendarPage;
