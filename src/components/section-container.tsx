export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col bg-slate-950 text-white p-6 items-center justify-center">
      {children}
    </section>
  );
}
