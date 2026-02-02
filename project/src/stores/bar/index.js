import { create } from "zustand";

const visibleMenu = create((set) => ({
  currentVisibleMenu: true,
  openVisibleMenu: () => set(() => ({ currentVisibleMenu: true })),
  closeVisibleMenu: () => set(() => ({ currentVisibleMenu: false })),
}));

export const useBarStore = {
  visibleMenu,
};
