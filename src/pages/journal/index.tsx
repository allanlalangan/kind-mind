// import JournalEntryForm from "~/components/JournalEntryForm";
import dynamic from "next/dynamic";

const JournalEntryForm = dynamic(
  () => import("~/components/JournalEntryForm"),
  { ssr: false }
);

export default function JournalPage() {
  return (
    <main>
      <section className="grid grid-cols-12 gap-4">
        <JournalEntryForm />
      </section>
    </main>
  );
}
