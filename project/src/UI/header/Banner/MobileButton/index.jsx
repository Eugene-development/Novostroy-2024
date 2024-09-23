import Link from "next/link";
import { useFavoritesProductsStore } from "@/stores/favorites";
const { favoritesProducts } = useFavoritesProductsStore;

export default () => {
  const { currentFavoritesProducts } = favoritesProducts();

  return (
    <Link
      href="/favorites"
      className="relative isolate px-1 focus-visible:outline-offset-[-4px] z-20"
    >
      <span className="sr-only">Мен</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-gray-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </Link>
  );
};
