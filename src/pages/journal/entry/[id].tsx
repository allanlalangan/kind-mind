import { type JournalEntry } from "@prisma/client";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import DashboardLayout from "~/components/DashboardLayout";
import JournalLayout from "~/components/JournalLayout";
import { type NextPageWithLayout } from "~/pages/_app";
import { api } from "~/utils/api";

const JournalEntryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: journalEntry } = api.entries.getEntry.useQuery(
    { id: id as string },
    {
      onSuccess: (data) => {
        console.log("getEntry success");
      },
    }
  );

  if (!journalEntry) return null;

  return (
    <>
      <section>
        <Link
          className="pr-1 underline-offset-2 hover:underline"
          href="/journal"
        >
          Journal
        </Link>
        &gt;
        <span className="px-1">Entry</span>&gt;
        <span className="px-1">{`${journalEntry.title}`}</span>
      </section>
      <article className="col-span-8 mb-2 flex flex-col rounded">
        <h3 className="text-4xl font-semibold text-primary-500">{`${journalEntry.title}`}</h3>
        <p>{`Created ${journalEntry.createdAt.toLocaleString()}`}</p>
      </article>
    </>
  );
};

JournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default JournalEntryPage;
