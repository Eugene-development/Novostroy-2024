"use client";
import { useFormsStore } from "@/stores/forms";

export default () => {
  const { openVisibleFormDesigner } = useFormsStore.visibleFormDesigner();

  return (
    <button
      onClick={openVisibleFormDesigner}
      type="button"
      className="text-white w-full mt-4 sm:mt-0 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 flex items-center justify-center"
    >
      <svg
        className="w-5 h-5 -ms-2 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
        />
      </svg>
      Консультация дизайнера
    </button>
  );
};
