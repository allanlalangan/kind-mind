import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "~/components/DashboardLayout";
import TipTapEditor from "~/components/TipTapEditor";
import { type NextPageWithLayout } from "~/pages/_app";

const CreateJournalEntryPage: NextPageWithLayout = () => {
  const [titleInputValue, setTitleInputValue] = useState("");
  return (
    <>
      <section className="mb-2">
        <Link
          className="pr-1 underline-offset-2 hover:underline"
          href="/journal"
        >
          Journal
        </Link>
        &gt;
        <span className="px-1">Create New Entry</span>
      </section>
      <div className="-mx-4 grid grid-cols-2 gap-1 bg-base-900 p-2">
        <button
          type="button"
          className="col-span-1 rounded border border-accent-200 bg-base-400/20 p-2 text-accent-200 transition hover:bg-base-400/30 active:bg-base-400/40"
        >
          Save Draft
        </button>
        <button
          type="submit"
          className="col-span-1 rounded bg-accent-200 p-2 text-primary-800 transition hover:bg-accent-300 active:bg-accent-400"
        >
          Submit Entry
        </button>
      </div>
      <TipTapEditor
        titleInputValue={titleInputValue}
        setTitleInputValue={setTitleInputValue}
        isEditable={true}
      />
    </>
  );
};

CreateJournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default CreateJournalEntryPage;
