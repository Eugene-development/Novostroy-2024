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
  selectedProject: null, // новое состояние для выбранного проекта
  openVisibleFormPrice: (project) =>
    set(() => ({
      currentVisibleFormPrice: true,
      selectedProject: project, // сохраняем проект при открытии формы
    })),
  closeVisibleFormPrice: () =>
    set(() => ({
      currentVisibleFormPrice: false,
      selectedProject: null, // сброс данных при закрытии формы
    })),
}));

export const useFormsStore = {
  visibleFormDesigner,
  visibleFormSalon,
  visibleFormMeasuring,
  visibleFormPrice,
};
