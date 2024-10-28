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
      <div className="sm:mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {dataCategory?.product.map((item) => (
          <div
            key={item.slug}
            className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="  ">
              {/* <!-- Carousel wrapper --> */}
              <div className="mb-4 rounded-lg">
                <SwiperSlider images={item?.image} />
              </div>
            </div>

            <div className="h-14">
              <Link
                href={`/${dataCategory.parentable.parentable.slug}/${item.slug}`}
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                {item.value}
              </Link>
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
              Узнать актуальную цену
            </button>

            <div className="mt-4 md:mt-6 sm:flex sm:items-center lg:flex-col max-w-sm">
              <FavoriteButton product={item} />

              <Link
                href={`/${dataCategory.parentable.parentable.slug}/${item.slug}`}
                className="inline-flex mt-4 w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300"
              >
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
