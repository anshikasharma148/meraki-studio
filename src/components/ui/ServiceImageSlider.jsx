import { useEffect, useState } from "react";
import ImageReveal from "./ImageReveal";

const SLIDE_INTERVAL = 4500;

/**
 * Auto-cycling center image for Services. Each slide replays the wipe + zoom reveal.
 * Hover a service title to jump to its matching slide (Decoral-style).
 */
export default function ServiceImageSlider({
  images,
  activeIndex,
  slideKey,
  onGoToSlide,
  className = "",
  imageClassName = "object-cover",
  delay = 120,
  duration = 1200,
  interval = SLIDE_INTERVAL,
  enabled = true,
}) {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!enabled || paused || images.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      onGoToSlide((activeIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [enabled, paused, images.length, interval, activeIndex, onGoToSlide]);

  const slide = images[activeIndex];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <ImageReveal
        resetKey={slideKey}
        src={slide.src}
        alt={slide.alt}
        className="h-full w-full"
        imageClassName={imageClassName}
        delay={slideKey === 0 ? delay : 0}
        duration={duration}
      />
    </div>
  );
}
