import { create } from "zustand";
import { persist } from "zustand/middleware";

const visibleSidebar = create(
  persist(
    (set) => ({
      currentVisibleSubMenus: {},
      selectedItem: null, // Состояние для хранения выбранного элемента
      toggleSubMenu: (itemName) =>
        set((state) => ({
          currentVisibleSubMenus: {
            ...state.currentVisibleSubMenus,
            [itemName]: !state.currentVisibleSubMenus[itemName],
          },
        })),
      setSelectedItem: (itemName) =>
        set({
          selectedItem: itemName, // Установка выбранного элемента
        }),
    }),
    {
      name: "sidebar-store", // Имя для LocalStorage
    },
  ),
);

export const useSidebarStore = {
  visibleSidebar,
};
