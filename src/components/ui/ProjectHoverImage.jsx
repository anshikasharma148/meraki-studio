import { Link } from "react-router-dom";
import ImageReveal from "./ImageReveal";

/** Smaller project tiles — reveal on scroll + tilted zoom on hover */
export default function ProjectHoverImage({
  src,
  alt,
  className = "",
  imageClassName = "object-cover",
  delay = 0,
  to = "/portfolio",
  fill = true,
}) {
  const sizeClass = fill ? "h-full w-full" : "w-full";

  const block = (
    <div
      className={`project-image-link-block overflow-hidden ${sizeClass} ${className}`}
    >
      <ImageReveal
        src={src}
        alt={alt}
        className={fill ? "h-full w-full" : "w-full"}
        imageClassName={`h-full w-full object-cover ${imageClassName}`}
        delay={delay}
      />
    </div>
  );

  if (to) {
    return (
      <Link to={to} className={`block ${sizeClass}`}>
        {block}
      </Link>
    );
  }

  return block;
}
