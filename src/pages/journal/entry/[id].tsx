import DashboardLayout from "~/components/DashboardLayout";
import JournalLayout from "~/components/JournalLayout";
import { type NextPageWithLayout } from "~/pages/_app";

const JournalEntryPage: NextPageWithLayout = () => {
  return (
    <>
      <h2 className="col-span-12 mb-2 text-2xl font-semibold text-primary-600">
        Recent Entries
      </h2>
      <article className="mb-2 flex flex-col rounded border border-primary-500 p-4">
        <h3>Entry 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugiat
          at et, corrupti deserunt maxime dolore illo quaerat delectus adipisci?
        </p>
      </article>
      <article className="mb-2 flex flex-col rounded border border-primary-500 p-4">
        <h3>Entry 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugiat
          at et, corrupti deserunt maxime dolore illo quaerat delectus adipisci?
        </p>
      </article>
      <article className="mb-2 flex flex-col rounded border border-primary-500 p-4">
        <h3>Entry 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugiat
          at et, corrupti deserunt maxime dolore illo quaerat delectus adipisci?
        </p>
      </article>
    </>
  );
};

JournalEntryPage.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>
      <JournalLayout>{page}</JournalLayout>
    </DashboardLayout>
  );
};

export default JournalEntryPage;
