"use client";
import { useState, useEffect } from "react";

import { Favorites } from "@/UI";

import { useFavoritesProductsStore } from "@/stores/favorites";
const { favoritesProducts } = useFavoritesProductsStore;

// export const metadata = {
//   title: "Избранное",
//   description: "Избранные товары",
// };

export default () => {
  const { currentFavoritesProducts } = favoritesProducts();

  // Решаем ошибку гидратации
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    domLoaded && (
      <>
        <Favorites products={currentFavoritesProducts} />
      </>
    )
  );
};
