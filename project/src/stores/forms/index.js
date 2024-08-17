import { create } from "zustand";

const visibleFormDesigner = create((set) => ({
  currentVisibleFormDesigner: true,
  openVisibleFormDesigner: () =>
    set(() => ({ currentVisibleFormDesigner: true })),
  closeVisibleFormDesigner: () =>
    set(() => ({ currentVisibleFormDesigner: false })),
}));

export const useFormsStore = {
  visibleFormDesigner,
};
