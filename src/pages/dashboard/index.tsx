import NewDoseForm from "~/components/NewDoseForm";

export default function DashboardPage() {
  return (
    <main className="mb-16 ml-2 mr-2 mt-20 md:ml-32">
      <section className="grid grid-cols-12 gap-4">
        <NewDoseForm />
      </section>
    </main>
  );
}
