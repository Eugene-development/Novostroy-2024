"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useOrderInfoStore } from "@/stores/orderInfo";
import { useFormsStore } from "@/stores/forms";

export default () => {
  const { currentVisibleOrderInfo, closeVisibleOrderInfo } =
    useOrderInfoStore.visibleOrderInfo();
  const { openVisibleFormDesigner } = useFormsStore.visibleFormDesigner();
  const { openVisibleFormMeasuring } = useFormsStore.visibleFormMeasuring();

  return (
    <Dialog
      open={currentVisibleOrderInfo}
      onClose={closeVisibleOrderInfo}
      className="relative z-50"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative w-full max-w-full sm:max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden transform transition-all"
        >
          <div
            id="readProductModal"
            className="relative p-4 w-full max-w-full sm:max-w-6xl h-full md:h-auto"
          >
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between mb-4 rounded-t sm:mb-5">
                <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                  <h3 className="font-semibold">
                    Мы сопровождаем вас на всём пути
                  </h3>
                </div>
                <div>
                  <button
                    onClick={() => closeVisibleOrderInfo()}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="readProductModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
              </div>
              {/* Сетка изображений */}
              <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-4 sm:mb-5">
                {["side", "front", "back", "back"].map((view, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-gray-100 rounded-lg w-full h-36 dark:bg-gray-700"
                  >
                    <img
                      src={`https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-${view}-image.png`}
                      alt={`iMac ${view} view`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Текстовое описание */}
              <dl className="sm:mb-10">
                <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
                  От консультации до сборки
                </dt>
                <dd className="mb-4 font-light text-sm sm:text-base text-gray-500 sm:mb-5 dark:text-gray-400">
                  Наша команда поможет пройти все этапы от А до Я максимально
                  комфортно и безопасно.
                </dd>
              </dl>
              {/* Этапы процесса */}
              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 sm:mb-5">
                {[
                  { step: "Консультация", label: "Бесплатно" },
                  { step: "Замер", label: "Профессионально" },
                  { step: "Проект", label: "Красиво" },
                  { step: "Договор", label: "Надёжно" },
                  { step: "Изготовление", label: "Быстро" },
                  { step: "Сборка", label: "Качественно" },
                ].map(({ step, label }, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gray-100 rounded-lg dark:bg-gray-700"
                  >
                    <dt className="mb-2 font-semibold text-gray-900 dark:text-white">
                      {`${idx + 1}. ${step}`}
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      <span className="bg-sky-100 text-sky-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800">
                        <CheckIcon className="w-3 h-3 mr-1" />
                        {label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row justify-between pt-4 space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center w-full">
                  <button
                    onClick={() => openVisibleFormDesigner()}
                    type="button"
                    className="w-full sm:w-auto text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Начать с консультации
                  </button>
                  <button
                    onClick={() => openVisibleFormMeasuring()}
                    type="button"
                    className="w-full sm:w-auto py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:ring-4 focus:outline-none focus:ring-gray-200"
                  >
                    Начать с замера
                  </button>
                </div>
                <button
                  onClick={() => closeVisibleOrderInfo()}
                  type="button"
                  className="w-full sm:w-auto py-2.5 px-5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                >
                  Закрыть
                </button>
              </div>{" "}
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
