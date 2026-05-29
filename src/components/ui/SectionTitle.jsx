export default function SectionTitle({ children, className = "", align = "center" }) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  return (
    <h2
      className={`font-serif text-3xl font-bold leading-tight text-brand-dark md:text-4xl lg:text-[2.75rem] ${alignClass} ${className}`}
    >
      {children}
    </h2>
  );
}
