"use client";
import { useFormsStore } from "@/stores/forms";

export default () => {
  const { openVisibleFormDesigner } = useFormsStore.visibleFormDesigner();

  return (
    <button
      onClick={openVisibleFormDesigner}
      type="button"
      className="text-white w-full mt-4 sm:mt-0 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center"
    >
      Консультация дизайнера
    </button>
  );
};
