"use client";
import { useOrderInfoStore } from "@/stores/orderInfo";

export default () => {
  const { openVisibleOrderInfo } = useOrderInfoStore.visibleOrderInfo();

  return (
    <>
      <button
        onClick={() => openVisibleOrderInfo()}
        id="infoButton"
        data-modal-target="infoModal"
        data-modal-toggle="infoModal"
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only"> Info </span>
        <svg
          className="me-1 h-4 w-4"
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
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Как заказать мебель
      </button>
    </>
  );
};
