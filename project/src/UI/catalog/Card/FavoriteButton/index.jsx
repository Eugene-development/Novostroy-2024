"use client";

import { useFavoritesProductsStore } from "@/stores/favorites";
const { favoritesProducts } = useFavoritesProductsStore;

export default function FavoriteButton({ product }) {
  const {
    addToFavoritesProducts,
    removeFromFavoritesProducts,
    currentFavoritesProducts,
  } = favoritesProducts();

  // Проверяем, является ли продукт избранным
  const isFavoriteProduct = currentFavoritesProducts.some(
    (item) => item.id === product.id,
  );

  // Обработчик нажатия
  const handleFavoriteToggle = () => {
    if (isFavoriteProduct) {
      removeFromFavoritesProducts(product.id);
    } else {
      addToFavoritesProducts(product);
    }
  };

  return (
    <button
      type="button"
      onClick={handleFavoriteToggle}
      className={`flex items-center w-full justify-center py-2.5 px-5 text-sm font-medium focus:outline-none focus:z-10 focus:ring-4 rounded-lg border ${
        isFavoriteProduct
          ? "text-red-900 bg-white border-red-700 hover:bg-red-100 hover:text-red-700 focus:ring-red-300"
          : "text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:ring-gray-100"
      }`}
    >
      <svg
        className={`w-5 h-5 -ms-2 me-2 ${
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
        <span className="whitespace-pre">В избранное</span>
      )}
    </button>
  );
}
