import Link from "next/link";
import { useMobileMenuStore } from "@/stores/MobileMenu";

export default () => {
  const { openVisibleMobileMenu } = useMobileMenuStore.visibleMobileMenu();
  return (
    <button
      type="button"
      onClick={openVisibleMobileMenu}
      className="relative isolate px-2 focus-visible:outline-offset-[-4px] z-20"
    >
      <span className="sr-only">Меню</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 text-gray-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
};
