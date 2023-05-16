// import TipTapEditor from "~/components/TipTapEditor";
import dynamic from "next/dynamic";
import JournalLayout from "~/components/JournalLayout";
import { type NextPageWithLayout } from "../_app";
import DashboardLayout from "~/components/DashboardLayout";

const TipTapEditor = dynamic(() => import("~/components/TipTapEditor"), {
  ssr: false,
});

const JournalPage: NextPageWithLayout = () => {
  return (
    <>
      <TipTapEditor />
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
