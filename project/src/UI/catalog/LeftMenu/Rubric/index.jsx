"use client";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function Index({ rubric }) {
  const [currentVisibleSubMenus, setCurrentVisibleSubMenus] = useState({});

  const toggleSubMenu = (itemName) => {
    setCurrentVisibleSubMenus((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <Fragment>
      <ul className="space-y-2">
        {rubric.map((item) => (
          <li key={item.name}>
            <Button
              onClick={() => toggleSubMenu(item.name)}
              type="button"
              className="flex items-center py-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-orders"
              data-collapse-toggle="dropdown-orders"
            >
              <span className="flex-1 ml-3 text-left whitespace-nowrap">
                {item.name}
              </span>
              <svg
                aria-hidden="true"
                className={`size-6 transform transition-transform ${currentVisibleSubMenus[item.name] ? "rotate-0" : "-rotate-90"}`}
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

            {currentVisibleSubMenus[item.name] &&
              item.category?.map((subitem) => (
                <ul id="dropdown-orders" className=" py-2 space-y-2" key={subitem.name}>
                  <li className="flex items-center">
                    <Link
                      href={subitem.href}
                      className="flex items-center p-1 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700"
                    >
                      {subitem.name}
                    </Link>
                  </li>
                </ul>
              ))}
          </li>
        ))}
      </ul>

      <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
          <a
            href="#"
            className="flex items-center p-1 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              ></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">
              Спецпредложения
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-1 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
              ></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Избранное</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-1 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              ></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Акции</span>
          </a>
        </li>
        <li>
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
        </li>
      </ul>
    </Fragment>
  );
}
