import { create } from "zustand";

const visibleMobileCatalog = create((set) => ({
  currentVisibleMobileCatalog: false,
  openVisibleMobileCatalog: () => set(() => ({ currentVisibleMobileCatalog: true })),
  closeVisibleMobileCatalog: () =>
    set(() => ({ currentVisibleMobileCatalog: false })),
}));

export const useMobileCatalogStore = {
  visibleMobileCatalog,
};
