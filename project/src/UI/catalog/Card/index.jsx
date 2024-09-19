"use client";
import { useFormsStore } from "@/stores/forms";

import Image from "next/image";
import Link from "next/link";

import SwiperSlider from "./SwiperSlider";
import FavoriteButton from "./FavoriteButton";

export default ({ dataCategory }) => {
  const { openVisibleFormPrice } = useFormsStore.visibleFormPrice();

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dataCategory.product.map((item) => (
          <div
            key={item.slug}
            className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div
              id="controls-carousel"
              className="relative w-full"
              data-carousel="static"
            >
              {/* <!-- Carousel wrapper --> */}

              <div className="relative mb-4 min-h-72  rounded-lg">
                <SwiperSlider images={item?.image} />             
              </div>
            </div>

            <div>
              <Link
                href={`/product/${item.slug}`}
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                {item.value}
              </Link>
              {/* <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, Apple M3 8-Core, macOS Sonoma</p> */}
            </div>

            <button
              onClick={() => openVisibleFormPrice(item.value)}
              className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:underline dark:text-sky-600"
            >
              <svg
                className="h-4 w-4"
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
                  d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Узнать актуальную цену проекта
            </button>

            <div className="flex items-center gap-4">
              <FavoriteButton product={item} />

              <Link
                href={`/${dataCategory.parentable.parentable.slug}/${item.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
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
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
