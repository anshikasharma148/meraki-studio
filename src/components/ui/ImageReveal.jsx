import { useEffect, useState } from "react";
import { useRevealContext } from "./revealContext";
import { useInViewReveal } from "../../hooks/useInViewReveal";

/**
 * Straight vertical wipe (right → left). The moving edge is a line, not the
 * container’s border-radius — shape comes only from overflow on the wrapper.
 *
 * Pass `resetKey` to replay the wipe when it changes (e.g. image sliders).
 */
export default function ImageReveal({
  src,
  alt,
  className = "",
  imageClassName = "",
  delay = 0,
  duration = 1200,
  immediate = false,
  resetKey,
  variant = "light",
  zoomIn = true,
  zoomScale = 1.15,
}) {
  const ctx = useRevealContext();
  const inGroup = ctx !== null;
  const isReplay = resetKey !== undefined;

  const { ref: observerRef, visible: selfVisible } = useInViewReveal({
    immediate,
    enabled: !inGroup && !isReplay,
  });

  const scrollVisible = inGroup ? ctx.visible : selfVisible;
  const canPlay = scrollVisible;

  const totalDelay = (ctx?.baseDelay ?? 0) + delay;
  const playTrigger = isReplay ? resetKey : scrollVisible;

  const [done, setDone] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  const overlayBg = variant === "dark" ? "bg-brand-hero" : "bg-white";

  useEffect(() => {
    if (!canPlay) return;

    setDone(false);
    setHideOverlay(false);

    let timeoutId;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        timeoutId = setTimeout(() => setDone(true), totalDelay);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeoutId);
    };
  }, [canPlay, totalDelay, playTrigger, src]);

  const handleEnd = (e) => {
    if (e.propertyName === "clip-path" && done) {
      setHideOverlay(true);
    }
  };

  return (
    <div
      ref={inGroup && !isReplay ? undefined : observerRef}
      className={`image-reveal relative overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`block h-full w-full object-cover ${imageClassName} ${
          zoomIn ? `image-reveal-img ${done ? "image-reveal-img--active" : ""}` : ""
        }`}
        style={
          zoomIn
            ? { "--reveal-zoom": zoomScale, transitionDuration: `${duration}ms` }
            : undefined
        }
      />
      {!hideOverlay && (
        <div
          className={`image-reveal-overlay pointer-events-none absolute inset-0 z-10 ${overlayBg} ${
            done ? "image-reveal-overlay--active" : ""
          }`}
          style={{ transitionDuration: `${duration}ms` }}
          onTransitionEnd={handleEnd}
          aria-hidden
        />
      )}
    </div>
  );
}
