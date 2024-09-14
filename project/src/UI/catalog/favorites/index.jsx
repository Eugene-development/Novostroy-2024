"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { useFavoritesProductsStore } from "@/stores/favorites";
const { favoritesProducts } = useFavoritesProductsStore;

export default ({ products }) => {
  const router = useRouter();

  const { currentFavoritesProducts } = favoritesProducts();

  // Решаем ошибку гидратации
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    domLoaded && (
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Избранное
            </h2>

            <button
              onClick={handleBack}
              className="flex text-base font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-1 ring-2 ring-gray-200 rounded-lg"
            >
              {" "}
              <span className="mr-2">Вернуться </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {currentFavoritesProducts.map((item) => (
              <div
                key={item.slug}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <Image
                  className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                  src={`${process.env.NEXT_PUBLIC_S3}/${item?.image[0]?.hash}`}
                  alt={item.value}
                  width={600}
                  height={600}
                />

                <Link
                  href={`/${item.parentable.parentable.parentable.slug}/${item.parentable.parentable.slug}/${item.parentable.slug}`}
                  className="inline-flex items-center bg-gray-50 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                >
                  Категория - {item.parentable.value}
                </Link>

                <span className="mt-4 block font-medium text-gray-900  dark:text-white">
                  {item.value}
                </span>

                <Link
                  href={`/${item.parentable.parentable.parentable.slug}/${item.slug}`}
                  title=""
                  className="mt-4 inline-flex items-center gap-1.5 font-medium text-sky-700 hover:text-sky-600 dark:text-sky-500 dark:hover:text-sky-400"
                >
                  Подробнее
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    ></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};
