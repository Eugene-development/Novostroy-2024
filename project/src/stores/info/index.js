import { create } from "zustand";

const visibleInfo = create((set) => ({
  currentVisibleInfo: false,
  currentInfo: null,
  openVisibleInfo: () => set(() => ({ currentVisibleInfo: true })),
  closeVisibleInfo: () => set(() => ({ currentVisibleInfo: false })),
  setCurrentInfo: (item) =>
      set(() => ({ currentInfo: item })),
}));

export const useInfoStore = {
  visibleInfo,
};
