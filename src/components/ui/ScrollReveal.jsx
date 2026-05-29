import { useRevealContext } from "./revealContext";
import { useInViewReveal } from "../../hooks/useInViewReveal";

/**
 * Text enters from below (slower than image wipe). Uses RevealGroup context
 * when nested so copy and images start on the same scroll trigger.
 */
export default function ScrollReveal({
  children,
  className = "",
  as: Component = "div",
  delay = 0,
  duration = 1500,
  immediate = false,
}) {
  const ctx = useRevealContext();
  const inGroup = ctx !== null;
  const { ref, visible: selfVisible } = useInViewReveal({
    immediate,
    enabled: !inGroup,
  });

  const visible = inGroup ? ctx.visible : selfVisible;
  const totalDelay = (ctx?.baseDelay ?? 0) + delay;

  return (
    <Component
      ref={inGroup ? undefined : ref}
      className={`scroll-reveal ${visible ? "scroll-reveal--visible" : ""} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${totalDelay}ms`,
      }}
    >
      {children}
    </Component>
  );
}
