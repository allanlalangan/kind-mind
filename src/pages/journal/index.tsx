// import JournalEntryForm from "~/components/JournalEntryForm";
import dynamic from "next/dynamic";

const JournalEntryForm = dynamic(
  () => import("~/components/JournalEntryForm"),
  { ssr: false }
);

export default function JournalPage() {
  return (
    <main className="mb-16 ml-2 mr-2 mt-20 md:ml-32">
      <section className="grid grid-cols-12 gap-4">
        <JournalEntryForm />
      </section>
    </main>
  );
}
