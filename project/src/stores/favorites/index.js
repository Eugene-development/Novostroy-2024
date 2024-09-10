import { create } from "zustand";
import { persist } from "zustand/middleware";

const favoritesProducts = create(
  persist(
    (set) => ({
      currentFavoritesProducts: [],
      addToFavoritesProducts: (newProduct) => {
        set((state) => ({
          currentFavoritesProducts: [
            ...state.currentFavoritesProducts,
            newProduct,
          ],
        }));
      },
      removeFromFavoritesProducts: (id) => {
        set((state) => ({
          currentFavoritesProducts: state.currentFavoritesProducts.filter(
            (product) => product.id !== id,
          ),
        }));
      },
    }),
    {
      name: "favorites",
    },
  ),
);

export const useFavoritesProductsStore = {
  favoritesProducts,
};
