"use client";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Index({ dataCatalog }) {
  // console.log(rubric)
  const [currentVisibleSubMenus, setCurrentVisibleSubMenus] = useState({});

  const toggleSubMenu = (itemName) => {
    setCurrentVisibleSubMenus((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <Fragment>
      <ul className="space-y-3 py-6 px-1 bg-gray-50/40 rounded-xl">
        {dataCatalog?.rubric.map((item) => (
          <li key={item.value}>
            <Button
              onClick={() => toggleSubMenu(item.value)}
              type="button"
              className="flex items-center py-2 w-full text-base font-semibold tracking-wide text-gray-700 hover:text-gray-950 rounded-lg transition duration-75 group hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-orders"
              data-collapse-toggle="dropdown-orders"
            >
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                {item.value}
              </span>
              <svg
                aria-hidden="true"
                className={`size-6 text-red-800 transform transition-transform animate-pulse ${currentVisibleSubMenus[item.value] ? "rotate-0" : "-rotate-90"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>

            {currentVisibleSubMenus[item.value] &&
              item.category?.map(
                (subitem) =>
                  subitem.is_active && (
                    <ul
                      id="dropdown-orders"
                      className=" py-2 space-y-2"
                      key={subitem.value}
                    >
                      <li className="flex items-center">
                        <Link
                          href={`/${dataCatalog.slug}/${item.slug}/${subitem.slug}`}
                          className="flex items-center p-1 pl-11 w-full text-sm font-semibold tracking-wide text-gray-700 hover:text-gray-950 rounded-lg transition duration-75 group hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
                        >
                          {subitem.value}
                        </Link>
                      </li>
                    </ul>
                  ),
              )}
          </li>
        ))}
      </ul>

      <ul className="py-6 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
          <Link
            href="/action"
            className="flex items-center p-1 text-sm font-normal tracking-wide text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="flex-shrink-0 size-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="flex-1 ml-3 whitespace-nowrap">Акции</span>
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className="flex items-center p-1 text-sm font-normal tracking-wide text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="flex-shrink-0 size-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="flex-1 ml-3 whitespace-nowrap">Контакты</span>
          </Link>
        </li>

        <li>
          <Link
            href="/favorites"
            className="flex items-center p-1 text-sm font-normal tracking-wide text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="flex-shrink-0 size-5 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>

            <span className="flex-1 ml-3 whitespace-nowrap">Избранное</span>
          </Link>
        </li>
      </ul>

      <div className="py-6 border-t border-gray-200">
        <Link
          href="/"
          className="flex items-center p-1 text-sm font-normal text-red-800 rounded-lg dark:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700 group"
        >
          <svg
            className="flex-shrink-0 w-6 h-6 text-red-800 transition duration-75 dark:text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            ></path>
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">На главную</span>
        </Link>
      </div>
    </Fragment>
  );
}
