"use client";

import ModalInfo from "./modal";
import { useInfoStore } from "@/stores/info";
const { visibleInfo } = useInfoStore;

const info = [
  {
    name: "Консультация",
    description:
      "Дадим исчерпывающую информацию по всем интересующим вас темам. Дадим рекомендации на основании нашего опыта, ваших размеров помещения и пожеланий к проекту.",
  },
  {
    name: "Замер",
    description:
      "Осуществим замер помещения с учётом габаритных размеров и углов в проекции. Отметим рекомендованное расположение точки воды и расположенных розеток.",
  },
  {
    name: "Салон",
    description:
      "Вы можете посетить один из салонов, где вы можете посмотреть образцы мебели и вживую пообщаться с нашими дизайнерами. Работаем по предварительной записи на определённое время!",
  },
  {
    name: "Договор",
    description:
      "Договор на изготовление и поставку мебели составляется только в салонах и дизайн-студиях непосредственно с сотрудником компании или дизайнером.",
  },
  {
    name: "Предоплата",
    description:
      "При оформлении договора на изготовление и поставку мебели вносится частичная предоплата. Возможно приобретение в рассрочку без переплат.",
  },
  {
    name: "Доставка",
    description:
      "Доставка заказа организуется компанией поставщиком мебели до вашего объекта в удобное для вас время. Также, по необходимости, предоставляются грузчики.",
  },
  {
    name: "Сборка",
    description:
      "Сборка мебели осуществляется квалифицированными специалистами, находящимися в штате компании и несущими ответственность за качество работ.",
  },
];

export default () => {
  const { openVisibleInfo, setCurrentInfo } = visibleInfo();

  const handleVisibleInfo = (item) => {
    openVisibleInfo();
    setCurrentInfo(item);
  };

  return (
    <>
      <ModalInfo />
      <div className="hidden md:flex">
        <nav
          id="toggleMobileMenu"
          className="bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-800"
        >
          <div className="px-4 py-2">
            <div className="flex items-center">
              <ul className="flex items-center text-sm text-gray-900 font-normal">
                {info.map((item) => (
                  <li key={item.name} className="block lg:inline">
                    <button
                      onClick={() => handleVisibleInfo(item)}
                      className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}

                <li className="block md:hidden">
                  <button
                    id="navigationDropdownButton"
                    aria-expanded="false"
                    data-dropdown-toggle="navigationDropdown"
                    className="inline-flex items-center justify-center px-2 py-2 rounded-xl hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>

                  <div
                    className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded-xl divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="navigationDropdown"
                  >
                    <ul
                      className="py-1 text-gray-700 dark:text-gray-300"
                      aria-labelledby="navigationDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Overview
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sales
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Billing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Team
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Messages
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Update your email</h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>Change the email address you want associated with your account.</p>
                    </div>
                    <form className="mt-5 sm:flex sm:items-center">
                        <div className="w-full sm:max-w-xs">
                            <label htmlhtmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="you@example.com"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div> */}
      </div>
    </>
  );
};
