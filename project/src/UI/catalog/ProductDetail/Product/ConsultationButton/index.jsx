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
      Консультация дизайнера
    </button>
  );
};
