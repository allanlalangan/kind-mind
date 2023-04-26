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
import { useState } from "react";
import Calendar from "~/components/Calendar";
import Event from "~/components/Event";

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

const CalendarPage = () => {
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
      <main className="ml-2 mr-2 mt-20 grid grid-cols-12 gap-4 md:ml-32">
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
            <button className="btn-secondary btn-sm btn col-span-6">
              Add Activity
            </button>
            <button className="btn-secondary btn-sm btn col-span-6">
              Add Dose
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CalendarPage;
