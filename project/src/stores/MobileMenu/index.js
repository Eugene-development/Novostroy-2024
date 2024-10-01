import { create } from "zustand";

const visibleMobileMenu = create((set) => ({
  currentVisibleMobileMenu: false,
  openVisibleMobileMenu: () => set(() => ({ currentVisibleMobileMenu: true })),
  closeVisibleMobileMenu: () =>
    set(() => ({ currentVisibleMobileMenu: false })),
}));

const visibleMobileCatalog = create((set) => ({
  currentVisibleMobileCatalog: false,
  openVisibleMobileCatalog: () =>
    set(() => ({ currentVisibleMobileCatalog: true })),
  closeVisibleMobileCatalog: () =>
    set(() => ({ currentVisibleMobileCatalog: false })),
}));

export const useMobileMenuStore = {
  visibleMobileMenu,
  visibleMobileCatalog,
};
