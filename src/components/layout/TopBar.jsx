import { site } from "../../data/site";
import { pageContainer } from "../../constants/layout";

export default function TopBar({ dark = true }) {
  return (
    <div className={dark ? "text-white" : "text-gray-500"}>
      <div className={pageContainer}>
        <div className="flex items-center justify-between pb-2.5 pt-5 font-sans text-[13px] font-normal leading-none tracking-wide lg:pt-6">
          <span className="text-white/90">Call us: {site.phone}</span>
          <span className="cursor-pointer text-white/90 transition-colors hover:text-white">
            Login / Register
          </span>
        </div>
        <hr className="m-0 border-0 border-t border-white/90" />
      </div>
    </div>
  );
}
