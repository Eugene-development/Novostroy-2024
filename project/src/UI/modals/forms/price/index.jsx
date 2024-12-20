"use client";
import { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useFormsStore } from "@/stores/forms";
import { frameData } from "framer-motion";

import { send } from "./server-actions";

export default () => {
  const { push } = useRouter();
  const { currentVisibleFormPrice, closeVisibleFormPrice, selectedProject } =
    useFormsStore.visibleFormPrice();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState(selectedProject || "");
  const [comment, setComment] = useState("");

  // Эффект для синхронизации состояния project с изменениями selectedProject
  useEffect(() => {
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [selectedProject]);

  const handleSendFormPrice = (e) => {
    e.preventDefault();

    const data = { name, phone, email, selectedProject: project, comment };

    send(data);

    setName("");
    setPhone("");
    setEmail("");
    setProject("");
    setComment("");

    push("/spasibo");
  };

  return (
    <Transition.Root show={currentVisibleFormPrice} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={closeVisibleFormPrice}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 inset-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-full opacity-0"
              >
                <Dialog.Panel className="pointer-events-auto w-[38rem] max-w-4xl mx-auto">
                  <form
                    onSubmit={handleSendFormPrice}
                    className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-gray-800 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-semibold leading-6 text-white">
                            Запрос цены проекта
                          </Dialog.Title>
                          <div className="ml-3 -mt-5 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-gray-800 text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => closeVisibleFormPrice()}
                            >
                              <span className="sr-only">Закрыть панель</span>
                              <XMarkIcon
                                className="size-5"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-cyan-50">
                            Просчитаем актуальную цену проекта на день подачи
                            заявки.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className=" px-4 sm:px-6">
                          <div className="space-y-4 pb-5 pt-6">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-base font-medium leading-6 text-gray-900"
                              >
                                Ваше имя{" "}
                                <sup className="text-red-700 w-4 h-4">
                                  &#x2736;
                                </sup>
                              </label>
                              <div className="mt-2">
                                <input
                                  required
                                  onChange={(e) => setName(e.target.value)}
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-base font-medium leading-6 text-gray-900"
                              >
                                Телефон{" "}
                                <sup className="text-red-700 w-4 h-4">
                                  &#x2736;
                                </sup>
                              </label>
                              <div className="mt-2">
                                <input
                                  onChange={(e) => setPhone(e.target.value)}
                                  type="text"
                                  name="phone"
                                  id="phone"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-base font-medium leading-6 text-gray-900"
                              >
                                Почта (необязательно)
                              </label>
                              <div className="mt-2">
                                <input
                                  onChange={(e) => setEmail(e.target.value)}
                                  type="text"
                                  name="email"
                                  id="email"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="project"
                                className="block text-base font-medium leading-6 text-gray-900"
                              >
                                Узнать цену:
                              </label>
                              <div className="mt-2">
                                <span>
                                  {selectedProject || "Продукт не выбран"}
                                </span>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="description"
                                className="block text-base font-medium leading-6 text-gray-900"
                              >
                                Ваш комментарий
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={(e) => setComment(e.target.value)}
                                  id="description"
                                  name="description"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-8 pb-6 pt-2 border-t-2">
                            <div className=" flex text-sm">
                              <p className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                <span className="mt-2">
                                  После отправки формы с Вами свяжется наш
                                  консультант.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-start px-4 py-4">
                      <button
                        onClick={() => closeVisibleFormPrice()}
                        type="button"
                        className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Закрыть
                      </button>
                      {name && phone && (
                        <button
                          onClick={() => closeVisibleFormPrice()}
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                        >
                          Отправить
                        </button>
                      )}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
