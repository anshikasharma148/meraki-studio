import { RevealContext } from "./revealContext";
import { useInViewReveal } from "../../hooks/useInViewReveal";

/** Single scroll trigger so images and text in a block animate together */
export default function RevealGroup({
  children,
  className = "",
  delay = 0,
  immediate = false,
}) {
  const { ref, visible } = useInViewReveal({ immediate });

  return (
    <RevealContext.Provider value={{ visible, baseDelay: delay }}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </RevealContext.Provider>
  );
}
