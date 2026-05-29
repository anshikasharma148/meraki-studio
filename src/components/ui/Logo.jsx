import { Link } from "react-router-dom";
import { site } from "../../data/site";
import logoImg from "../../assets/logo.png";

const sizes = {
  default: "max-h-14 w-auto max-w-[320px]",
  hero: "max-h-[100px] w-auto max-w-[min(460px,44vw)] sm:max-h-[112px] lg:max-h-[136px] lg:max-w-[540px] xl:max-h-[152px] xl:max-w-[620px]",
  footer: "max-h-16 w-auto max-w-[300px] lg:max-h-[80px] lg:max-w-[360px]",
};

export default function Logo({
  link = true,
  className = "",
  size = "default",
  onDark = false,
}) {
  const img = (
    <img
      src={logoImg}
      alt={site.name}
      className={`block h-auto w-auto object-contain object-left ${sizes[size] || sizes.default} ${
        onDark ? "mix-blend-screen" : ""
      } ${className}`}
    />
  );

  const wrapClass = onDark ? "bg-brand-hero" : "";

  if (link) {
    return (
      <Link to="/" className={`inline-block shrink-0 leading-none ${wrapClass}`}>
        {img}
      </Link>
    );
  }

  return <div className={`inline-block shrink-0 leading-none ${wrapClass}`}>{img}</div>;
}
