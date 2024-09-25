import { create } from "zustand";

const visibleMobileMenu = create((set) => ({
  currentVisibleMobileMenu: false,
  openVisibleMobileMenu: () => set(() => ({ currentVisibleMobileMenu: true })),
  closeVisibleMobileMenu: () =>
    set(() => ({ currentVisibleMobileMenu: false })),
}));

export const useMobileMenuStore = {
  visibleMobileMenu,
};
