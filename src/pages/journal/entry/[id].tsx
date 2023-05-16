import DashboardLayout from "~/components/DashboardLayout";
import { type NextPageWithLayout } from "~/pages/_app";

const JournalEntryPage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="col-span-12 mb-4 text-4xl font-bold text-primary-600">
        Journal
      </h1>
      <section className="col-span-6 flex flex-col rounded bg-base-100/40 p-4">
        <h2 className="col-span-12 mb-2 text-2xl font-semibold text-primary-600">
          Recent Entries
        </h2>
        <article className="mb-2 flex flex-col rounded border border-primary-500 p-4">
          <h3>Entry 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugiat
            at et, corrupti deserunt maxime dolore illo quaerat delectus
            adipisci?
          </p>
        </article>
        <article className="mb-2 flex flex-col rounded border border-primary-500 p-4">
          <h3>Entry 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugiat
            at et, corrupti deserunt maxime dolore illo quaerat delectus
            adipisci?
          </p>
        </article>
        <article className="mb-2 flex flex-col rounded border border-primary-500 p-4">
          <h3>Entry 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic fugiat
            at et, corrupti deserunt maxime dolore illo quaerat delectus
            adipisci?
          </p>
        </article>
      </section>
    </>
  );
};

JournalEntryPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default JournalEntryPage;
