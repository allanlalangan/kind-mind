import { format } from "date-fns";
import Event from "../Event";

type Meeting = {
  id: number;
  name: string;
  startDatetime: string;
  endDatetime: string;
};

type DailyViewProps = {
  selectedDay: Date;
  selectedDayMeetings: Meeting[];
};

export default function DailyView({
  selectedDay,
  selectedDayMeetings,
}: DailyViewProps) {
  return (
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
  );
}
