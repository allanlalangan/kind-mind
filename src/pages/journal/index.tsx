import JournalLayout from "~/components/JournalLayout";
import { type NextPageWithLayout } from "../_app";
import DashboardLayout from "~/components/DashboardLayout";
import Link from "next/link";
import { api } from "~/utils/api";

const JournalPage: NextPageWithLayout = () => {
  const { data: entries, refetch: refetchEntries } =
    api.entries.getAll.useQuery(undefined, {
      onSuccess: (data) => {
        console.log("getAll success", data);
      },
    });

  return (
    <>
      <section className="col-span-12 flex flex-col rounded bg-base-100/40 p-4 shadow md:col-span-6">
        <h2 className="col-span-12 mb-1 text-2xl font-medium">
          Recent Entries
        </h2>
        {entries?.map((entry) => (
          <Link
            href={`/journal/entry/${entry.id}`}
            className="rounded border border-primary-500 p-2"
            key={entry.id}
          >
            <h3 className="text-2xl text-primary-500">{entry.title}</h3>
            <p>{entry.createdAt.toLocaleString()}</p>
          </Link>
        ))}
      </section>
      <Link
        className="col-span-12 row-start-1 flex items-center rounded bg-primary-500 p-4 text-white shadow transition hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-400/50 active:bg-primary-700 md:col-span-6 md:row-auto"
        href="/journal/create"
      >
        <span className="mr-2 h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="32"
            // height="32"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span className="text-2xl font-semibold uppercase tracking-wider">
          Create New Entry
        </span>
      </Link>
    </>
  );
};

JournalPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <JournalLayout>{page}</JournalLayout>
    </DashboardLayout>
  );
};

export default JournalPage;
