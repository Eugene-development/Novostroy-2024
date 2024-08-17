"use client"
import { useFormsStore } from "@/stores/forms";

export default function index() {
  
  const { openVisibleFormDesigner } = useFormsStore.visibleFormDesigner();
  const { openVisibleFormSalon } = useFormsStore.visibleFormSalon();
  const { openVisibleFormMeasuring } = useFormsStore.visibleFormMeasuring();

  return (
    <div className="mb-3 ">
      <ul className="grid grid-cols-3 gap-2">
        <li>
          <div
            onClick={openVisibleFormDesigner}
            className="rounded-xl bg-primary-50 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800 p-2.5 flex flex-col items-center justify-center group"
          >
            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mb-1 group-hover:bg-primary-200  dark:group-hover:bg-primary-700">
              <svg
                className="w-5 h-5 text-primary-600 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                ></path>
              </svg>
            </span>
            <span className="text-xs text-primary-600 dark:text-primary-300 font-normal">
              Дизайнер
            </span>
          </ div>
        </li>
        <li>
          <div
            onClick={openVisibleFormSalon}
            className="rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800 p-2.5 flex flex-col items-center justify-center group"
          >
            <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mb-1 group-hover:bg-purple-200  dark:group-hover:bg-purple-700">
              <svg
                className="w-5 h-5 text-purple-600 dark:text-purple-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
            </span>
            <span className="text-xs text-purple-600 dark:text-purple-300 font-normal">
              Салон
            </span>
          </div>
        </li>
        <li>
          <div
            onClick={openVisibleFormMeasuring}
            className="rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800 p-2.5 flex flex-col items-center justify-center group"
          >
            <span className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center mb-1 group-hover:bg-teal-200  dark:group-hover:bg-teal-700">
              <svg
                className="w-5 h-5 text-teal-600 dark:text-teal-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </span>
            <span className="text-xs text-teal-600 dark:text-teal-300 font-normal">
              Замер
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
