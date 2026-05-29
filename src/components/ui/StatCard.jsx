export default function StatCard({ value, label, variant = "default" }) {
  if (variant === "project") {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-9 text-center sm:px-6 sm:py-10">
        <span className="counter-number">{value}</span>
        <span className="counter-text mt-3">{label}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 text-center">
      <span className="font-serif text-5xl font-bold text-brand-dark md:text-6xl">
        {value}
      </span>
      <span className="mt-2 font-sans text-sm text-gray-500">{label}</span>
    </div>
  );
}
