import { createContext, useContext } from "react";

export const RevealContext = createContext(null);

export function useRevealContext() {
  return useContext(RevealContext);
}
