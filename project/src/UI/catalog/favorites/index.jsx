"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { ButtonBack } from "@/UI";

import { useFavoritesProductsStore } from "@/stores/favorites";
const { favoritesProducts } = useFavoritesProductsStore;

export default () => {
  const { removeFromFavoritesProducts } = favoritesProducts();

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

  return domLoaded && currentFavoritesProducts.length > 0 ? (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Избранное
          </h2>

          <ButtonBack />
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
                className="inline-flex items-center bg-gray-50 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
              >
                Категория - {item.parentable.value}
              </Link>

              <span className="mt-4 block font-medium text-gray-900  dark:text-white">
                {item.value}
              </span>

              <div className="flex mt-4 justify-between space-x-12">
                <Link
                  href={`/${item.parentable.parentable.parentable.slug}/${item.slug}`}
                  title=""
                  className=" inline-flex items-center gap-1.5 font-medium text-sky-700 hover:text-sky-600 dark:text-sky-500 dark:hover:text-sky-400"
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

                <button
                  type="button"
                  onClick={() => removeFromFavoritesProducts(item.id)}
                  role="button"
                  className="flex items-center w-full justify-center py-2 px-5 text-sm font-medium focus:outline-none focus:z-10 focus:ring-4 rounded-lg border  text-gray-900  bg-white  border-gray-700 hover:bg-gray-100 hover:text-gray-700  focus:ring-gray-300"
                >
                  <svg
                    className="w-5 h-5 -ms-2 me-2 fill-red-700"
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
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>

                  <span>Убрать</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Избранное
          </h2>

          <ButtonBack />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          В разделе пока пусто
        </div>
      </div>
    </section>
  );
};
