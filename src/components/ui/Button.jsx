import { Link } from "react-router-dom";

const variants = {
  primary: "bg-brand-dark text-white hover:bg-brand-hero",
  outline:
    "border border-white bg-brand-hero text-white hover:bg-white/10",
  dark: "bg-brand-dark text-white hover:bg-brand-hero",
};

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  className = "",
  type = "button",
  onClick,
}) {
  const base =
    "inline-block px-8 py-3 font-sans text-sm font-medium tracking-wide transition-colors";

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
