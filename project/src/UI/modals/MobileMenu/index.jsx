"use client";
import Link from "next/link";
import { useState } from "react";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

import { useMobileMenuStore } from "@/stores/MobileMenu";

const tabs = [
  { name: "Главное меню", key: "menu" },
  { name: "Информация", key: "information" },
];

const menu = [
  {
    name: "Главная",
    href: "/",
  },
  {
    name: "Услуги",
    submenu: [
      {
        name: "Консультация",
        href: "/service/consultation",
      },
      {
        name: "Замер помещения",
        href: "/service/measuring",
      },
      {
        name: "Проект мебели",
        href: "/service/design",
      },
    ],
  },
  {
    name: "Каталог",
    submenu: [
      {
        name: "Мебель",
        href: "/mebel",
      },
      {
        name: "Техника",
        href: "/tehnika",
      },
      {
        name: "Столешницы",
        href: "/stoleshnica",
      },
      {
        name: "Сантехника",
        href: "/santehnika",
      },
    ],
  },
  {
    name: "Акции",
    href: "/action",
  },
  {
    name: "Блог",
    href: "/blog",
  },
];

const information = [
  {
    name: "О компании",
    href: "/about",
  },
  {
    name: "Партнёрство",
    href: "/partnership",
  },
  {
    name: "Отзывы",
    href: "/testimonials",
  },
  {
    name: "Рассрочка",
    href: "/installment",
  },
  {
    name: "Контакты",
    href: "/contacts",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default () => {
  const { currentVisibleMobileMenu, closeVisibleMobileMenu } =
    useMobileMenuStore.visibleMobileMenu();

  // Состояние для активной вкладки
  const [activeTab, setActiveTab] = useState("menu");

  // Определяем, какой массив отображать
  const itemsToRender = activeTab === "menu" ? menu : information;

  return (
    <Dialog
      open={currentVisibleMobileMenu}
      onClose={() => closeVisibleMobileMenu}
      className="relative z-40"
    >
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex mt-10 h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                      <Link href="/">
                        <span className="sr-only">Novostroy</span>
                        <img
                          className="h-12  w-auto "
                          src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
                          alt="logo"
                        />
                      </Link>
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={closeVisibleMobileMenu}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-sky-500"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Закрыть</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200">
                  <div className="px-6">
                    <nav className="-mb-px flex space-x-6">
                      {tabs.map((tab) => (
                        <button
                          key={tab.key}
                          type="button"
                          onClick={() => setActiveTab(tab.key)}
                          className={classNames(
                            activeTab === tab.key
                              ? "border-sky-500 text-sky-600"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium",
                          )}
                        >
                          {tab.name}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
                <ul
                  role="list"
                  className="flex-1 divide-y divide-gray-200 overflow-y-auto"
                >
                  {itemsToRender.map((item) => (
                    <li key={item.name} className="*:h-20">
                      <div className="group relative flex items-center px-5 py-6">
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={closeVisibleMobileMenu}
                            className="-m-1 block flex-1 p-1"
                          >
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 group-hover:bg-gray-50"
                            />
                            <div className="relative flex min-w-0 flex-1 items-center">
                              <div className="ml-4 truncate">
                                <p className="truncate text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ) : (
                          item.submenu && (
                            <Menu
                              as="div"
                              className="relative inline-block flex-shrink-0 text-left"
                            >
                              <MenuButton className="group relative inline-flex h-8 w-8 items-center rounded-full bg-white focus:outline-none">
                                <div className="ml-3 block flex-1 p-1">
                                  <div
                                    aria-hidden="true"
                                    className="absolute inset-0 "
                                  />
                                  <div className="relative flex min-w-0 flex-1 items-center">
                                    <div className=" truncate">
                                      <p className="truncate text-sm font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </MenuButton>
                              <MenuItems
                                transition
                                className="absolute left-4 top-8 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                              >
                                <div className="py-1">
                                  {item.submenu.map((subitem) => (
                                    <MenuItem key={subitem.name}>
                                      <Link
                                        href={subitem.href}
                                        onClick={closeVisibleMobileMenu}
                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                      >
                                        {subitem.name}
                                      </Link>
                                    </MenuItem>
                                  ))}
                                </div>
                              </MenuItems>
                            </Menu>
                          )
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
