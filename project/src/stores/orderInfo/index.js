import { create } from "zustand";

const visibleOrderInfo = create((set) => ({
  currentVisibleOrderInfo: false,
  openVisibleOrderInfo: () => set(() => ({ currentVisibleOrderInfo: true })),
  closeVisibleOrderInfo: () => set(() => ({ currentVisibleOrderInfo: false })),
}));

export const useOrderInfoStore = {
  visibleOrderInfo,
};
