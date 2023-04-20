import { format, parseISO } from 'date-fns';

export default function Event({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className='group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100'>
      <article className='flex-auto'>
        <p className='text-gray-900'>{meeting.name}</p>
        <p className='mt-0.5'>
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, 'h:mm a')}
          </time>{' '}
          -{' '}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, 'h:mm a')}
          </time>
        </p>
      </article>
    </li>
  );
}
