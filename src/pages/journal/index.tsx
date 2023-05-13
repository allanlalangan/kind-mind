// import JournalEntryForm from "~/components/JournalEntryForm";
import dynamic from "next/dynamic";
import DashboardLayout from "~/components/DashboardLayout";
import { type NextPageWithLayout } from "../_app";

const JournalEntryForm = dynamic(
  () => import("~/components/JournalEntryForm"),
  { ssr: false }
);

const JournalPage: NextPageWithLayout = () => {
  return (
    <>
      <section className="grid grid-cols-12 gap-4">
        <JournalEntryForm />
      </section>
    </>
  );
};

JournalPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default JournalPage;
