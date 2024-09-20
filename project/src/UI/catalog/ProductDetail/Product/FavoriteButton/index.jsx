"use client";

import { useFavoritesProductsStore } from "@/stores/favorites";
const { favoritesProducts } = useFavoritesProductsStore;

export default ({ product }) => {
  const {
    addToFavoritesProducts,
    removeFromFavoritesProducts,
    currentFavoritesProducts,
  } = favoritesProducts();

  const isFavoriteProduct = currentFavoritesProducts.some(function (item) {
    return item.id === product.id;
  });

  return (
    <div className="gap-4 mt-4 md:mt-6 sm:flex sm:items-center lg:flex-col">
      <button
        type="button"
        onClick={() =>
          isFavoriteProduct
            ? removeFromFavoritesProducts(product.id)
            : addToFavoritesProducts(product)
        }
        role="button"
        className={`flex items-center w-full justify-center py-2.5 px-5 text-sm font-medium focus:outline-none focus:z-10 focus:ring-4 rounded-lg border ${
          isFavoriteProduct
            ? "text-red-900  bg-white  border-red-700 hover:bg-red-100 hover:text-red-700  focus:ring-red-300"
            : "text-gray-900  bg-white  border-gray-200 hover:bg-gray-100 hover:text-sky-700  focus:ring-gray-100"
        }`}
      >
        <svg
          className={`w-5 h-5 -ms-2 me-2  ${
            isFavoriteProduct ? "fill-red-700" : "fill-none"
          }`}
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
        {isFavoriteProduct ? (
          <span>В избранном</span>
        ) : (
          <span>Добавить в избранное</span>
        )}
      </button>

      <a
        href="#"
        title=""
        className="text-white w-full mt-4 sm:mt-0 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none dark:focus:ring-sky-800 flex items-center justify-center"
        role="button"
      >
        <svg
          className="w-5 h-5 -ms-2 me-2"
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
        Консультация дизайнера
      </a>
    </div>
  );
};
