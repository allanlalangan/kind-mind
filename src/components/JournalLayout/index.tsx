export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="col-span-12 mb-4 text-4xl font-bold text-primary-600">
        Journal
      </h1>
      <section className="grid grid-cols-12 gap-4">{children}</section>
    </>
  );
}
