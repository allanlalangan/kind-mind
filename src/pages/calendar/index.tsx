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
import { useState } from "react";
import Calendar from "~/components/Calendar";
import DailySchedule from "~/components/DailySchedule";

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
      <main className="grid grid-cols-12 gap-4 p-4">
        <Calendar
          firstDayCurrentMonth={firstDayCurrentMonth}
          days={days}
          events={events}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
        <DailySchedule
          selectedDay={selectedDay}
          selectedDayMeetings={selectedDayMeetings}
        />
        <section className="col-span-12 row-span-1 p-8 md:col-span-6 lg:col-start-7">
          <h2 className="mb-2 tracking-wider">Create New Event</h2>
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
