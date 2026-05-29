import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import TopBar from "./TopBar";
import Logo from "../ui/Logo";
import { site } from "../../data/site";
import { pageContainer } from "../../constants/layout";

function NavItem({ item, dark }) {
  const baseClass = dark
    ? "font-serif text-base font-semibold leading-none tracking-wide text-white transition-opacity hover:opacity-90 lg:text-[17px]"
    : "font-sans text-[15px] font-medium text-gray-600 hover:text-brand-dark";

  return (
    <NavLink
      to={item.path}
      end={item.path === "/"}
      className={({ isActive }) =>
        `${baseClass} inline-flex items-center gap-1.5 whitespace-nowrap`
      }
    >
      {item.label}
      {item.hasDropdown && (
        <ChevronDown
          className={`h-3 w-3 shrink-0 stroke-[2.5] ${dark ? "text-white" : "text-brand-dark"}`}
          aria-hidden
        />
      )}
    </NavLink>
  );
}

export default function Header({ variant = "dark" }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const dark = variant === "dark" || (isHome && variant !== "light");

  return (
    <header className={dark ? "bg-brand-hero" : "bg-white shadow-sm"}>
      {dark && <TopBar dark={dark} />}

      <div className={pageContainer}>
        <div className="flex items-center justify-between gap-8 pb-5 pt-4 lg:pb-6 lg:pt-4">
          <Logo size={dark ? "hero" : "default"} onDark={dark} />

          <nav className="hidden shrink-0 items-center gap-9 lg:flex lg:gap-11 xl:gap-14">
            {site.nav.map((item) => (
              <NavItem key={item.path + item.label} item={item} dark={dark} />
            ))}
          </nav>

          <button
            type="button"
            className={`lg:hidden ${dark ? "text-white" : "text-brand-dark"}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className={`border-t py-4 lg:hidden ${
            dark ? "border-white/25 bg-brand-hero" : "border-gray-100 bg-white"
          }`}
        >
          <div className={`${pageContainer} flex flex-col gap-2`}>
            {site.nav.map((item) => (
              <NavLink
                key={item.path + item.label}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setOpen(false)}
                className={`inline-flex items-center gap-1.5 py-2 ${
                  dark
                    ? "font-serif text-lg font-semibold tracking-wide text-white"
                    : "font-sans text-base text-gray-700"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4" aria-hidden />
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
