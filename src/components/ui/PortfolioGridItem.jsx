import ProjectHoverImage from "./ProjectHoverImage";

export default function PortfolioGridItem({ item, delay = 0 }) {
  const aspectClass =
    item.variant === "tall"
      ? "portfolio-item-image--tall"
      : item.variant === "square"
        ? "portfolio-item-image--square"
        : "portfolio-item-image--landscape";

  return (
    <article className="portfolio-masonry-item">
      <ProjectHoverImage
        src={item.image}
        alt={item.title || "Project image"}
        className={aspectClass}
        delay={delay}
        to="/portfolio"
        fill={false}
      />
      {item.title && <h3 className="portfolio-item-title">{item.title}</h3>}
    </article>
  );
}
