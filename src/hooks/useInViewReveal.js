import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS = {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px",
};

export function useInViewReveal({
  immediate = false,
  enabled = true,
  threshold = DEFAULT_OPTIONS.threshold,
  rootMargin = DEFAULT_OPTIONS.rootMargin,
  once = true,
} = {}) {
  const ref = useRef(null);
  // Always start hidden so the enter transition can run (including `immediate` hero)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    if (immediate) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, enabled, threshold, rootMargin, once]);

  return { ref, visible };
}
