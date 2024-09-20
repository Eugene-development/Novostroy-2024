import Link from "next/link";
import { useFavoritesProductsStore } from "@/stores/favorites";
const { favoritesProducts } = useFavoritesProductsStore;

export default () => {
  const { currentFavoritesProducts } = favoritesProducts();

  return (
    <Link
      href="/favorites"
      className="relative isolate px-3 focus-visible:outline-offset-[-4px] z-20"
    >
      <span className="sr-only">Избранное</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-tabler icons-tabler-outline icon-tabler-heart size-7 
          ${
            currentFavoritesProducts.length > 0
              ? "text-red-700 fill-red-500 animate-pulse"
              : "text-gray-50"
          }`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
    </Link>
  );
};
