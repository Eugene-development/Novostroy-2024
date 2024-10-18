"use client";
import Link from "next/link";
import { useState, useEffect } from "react"; // Добавляем useEffect для установки начального значения
import { useParams } from "next/navigation"; // Используем useParams вместо useRouter

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default ({ dataFullCatalog }) => {
  const { currentVisibleMobileCatalog, closeVisibleMobileCatalog } =
    useMobileMenuStore.visibleMobileCatalog();

  const params = useParams(); // Получаем параметры маршрута
  const [selectedIndex, setSelectedIndex] = useState(0); // Начальное состояние

  // Эффект для установки начального значения selectedIndex
  useEffect(() => {
    const currentSlug = params?.slug[0]; 
    console.log("params.slug:", currentSlug); // Логируем params
  
    // Проверяем, является ли currentSlug строкой
    if (typeof currentSlug === "string") {
      const initialIndex = dataFullCatalog.findIndex((tab) => {
        console.log("Comparing tab.slug:", tab.slug, "with currentSlug:", currentSlug);
        return tab.slug && tab.slug.toLowerCase() === currentSlug.toLowerCase();
      });
  
      if (initialIndex !== -1) {
        setSelectedIndex(initialIndex); // Устанавливаем найденный индекс
      }
    } else {
      console.warn("currentSlug is not a string:", currentSlug); // Логируем предупреждение, если это не строка
    }
  }, [params, dataFullCatalog]);

  return (
    <Dialog
      open={currentVisibleMobileCatalog}
      onClose={() => closeVisibleMobileCatalog}
      className="relative z-40"
    >
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-lg transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
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
                        onClick={closeVisibleMobileCatalog}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-sky-500"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Закрыть</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Навигация по табам */}
                <div className="mb-2">
                  <div className="px-3">
                    <nav className="-mb-px flex space-x-2">
                      {dataFullCatalog.map((tab, index) => (
                        <button
                          key={tab.value}
                          type="button"
                          onClick={() => setSelectedIndex(index)} // Устанавливаем индекс при клике
                          className={classNames(
                            index === selectedIndex // Проверка, является ли этот элемент выбранным
                              ? "border-sky-500 text-sky-600"
                              : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                            "whitespace-nowrap border-b-2 px-1 py-1 m-1 text-xs font-medium bg-gray-100 justify-center rounded-lg"
                          )}
                        >
                          {tab.value}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Список элементов, соответствующий выбранному табу */}
                <ul
                  role="list"
                  className="flex-1 divide-y divide-gray-200 overflow-y-auto "
                >
                  {dataFullCatalog[selectedIndex]?.rubric.map(
                    (
                      item, // Используем выбранный индекс
                    ) => (
                      <li key={item.value} className="*:h-20">
                        <div className="group relative flex items-center px-5 py-6">
                          {item.href ? (
                            <Link
                              href={item.value}
                              onClick={closeVisibleMobileCatalog}
                              className="-m-1 block flex-1 p-1"
                            >
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 group-hover:bg-gray-50"
                              />
                              <div className="relative flex min-w-0 flex-1 items-center">
                                <div className="ml-4 truncate">
                                  <p className="truncate text-sm font-medium text-gray-900">
                                    {item.value}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ) : (
                            item.category && (
                              <Menu as="div" className="relative ml-2 inline-block flex-shrink-0 text-left">
                                {/* Оборачиваем весь блок в MenuButton */}
                                <MenuButton className="group relative inline-flex items-center w-full  rounded-lg bg-white focus:outline-none ">
                                  {/* Весь контент, включая текст и иконку */}
                                  <div className="-m-1 block flex-1 p-1">
                                    <div
                                      aria-hidden="true"
                                      className="absolute inset-0 "
                                    />
                                    <div className="relative flex min-w-0 flex-1 items-center">
                                      <div className="ml-4 truncate">
                                        <p className=" truncate text-sm font-medium text-gray-900">
                                          {item.value}
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
                                    {item.category.map((subitem) => (
                                      <MenuItem key={subitem.value}>
                                        <Link
                                          href={`/${item.parentable.slug}/${item.slug}/${subitem.slug}`}
                                          onClick={closeVisibleMobileCatalog}
                                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                        >
                                          {subitem.value}
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
                    )
                  )}
                </ul>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};