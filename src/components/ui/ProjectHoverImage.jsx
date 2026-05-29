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
}) {
  const block = (
    <div className={`project-image-link-block h-full w-full overflow-hidden ${className}`}>
      <ImageReveal
        src={src}
        alt={alt}
        className="h-full w-full"
        imageClassName={`h-full w-full object-cover ${imageClassName}`}
        delay={delay}
      />
    </div>
  );

  if (to) {
    return (
      <Link to={to} className="block h-full w-full">
        {block}
      </Link>
    );
  }

  return block;
}
