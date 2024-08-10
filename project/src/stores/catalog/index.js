import { create } from "zustand";

const useCatalogStore = create((set) => ({
  catalogData: "ooo",
  setCatalogData: (data) => set({ catalogData: data }),
}));

export default useCatalogStore;
