export default function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
      <span className="font-serif text-5xl font-bold text-brand-dark md:text-6xl">
        {value}
      </span>
      <span className="mt-2 font-sans text-sm text-gray-500">{label}</span>
    </div>
  );
}
