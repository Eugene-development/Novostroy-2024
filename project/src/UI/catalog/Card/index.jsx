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

              <div className="relative mb-4   rounded-lg">
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
              type="button"
              onClick={() => openVisibleFormPrice(item.value)}
              className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:underline dark:text-sky-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-sky-700 dark:text-sky-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              Узнать актуальную цену проекта
            </button>

            <div className="gap-4 mt-4 md:mt-6 sm:flex sm:items-center lg:flex-col max-w-sm">
              <FavoriteButton product={item} />

              <Link
                href={`/${dataCategory.parentable.parentable.slug}/${item.slug}`}
                className="inline-flex mt-4 w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
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
