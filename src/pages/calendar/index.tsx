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
import Calendar from "~/components/MonthlyView";
import DashboardLayout from "~/components/DashboardLayout";
import DailyView from "~/components/DailyView";
import { type NextPageWithLayout } from "../_app";
import CreateEvent from "~/components/CreateEvent";

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
        <DailyView
          selectedDay={selectedDay}
          selectedDayMeetings={selectedDayMeetings}
        />
        <CreateEvent />
      </section>
    </>
  );
};

CalendarPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CalendarPage;
