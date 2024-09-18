import { create } from "zustand";

const visibleFormDesigner = create((set) => ({
  currentVisibleFormDesigner: false,
  openVisibleFormDesigner: () =>
    set(() => ({ currentVisibleFormDesigner: true })),
  closeVisibleFormDesigner: () =>
    set(() => ({ currentVisibleFormDesigner: false })),
}));

const visibleFormSalon = create((set) => ({
  currentVisibleFormSalon: false,
  openVisibleFormSalon: () => set(() => ({ currentVisibleFormSalon: true })),
  closeVisibleFormSalon: () => set(() => ({ currentVisibleFormSalon: false })),
}));

const visibleFormMeasuring = create((set) => ({
  currentVisibleFormMeasuring: false,
  openVisibleFormMeasuring: () =>
    set(() => ({ currentVisibleFormMeasuring: true })),
  closeVisibleFormMeasuring: () =>
    set(() => ({ currentVisibleFormMeasuring: false })),
}));

const visibleFormPrice = create((set) => ({
  currentVisibleFormPrice: false,
  openVisibleFormPrice: () => set(() => ({ currentVisibleFormPrice: true })),
  closeVisibleFormPrice: () => set(() => ({ currentVisibleFormPrice: false })),
}));

export const useFormsStore = {
  visibleFormDesigner,
  visibleFormSalon,
  visibleFormMeasuring,
  visibleFormPrice,
};
