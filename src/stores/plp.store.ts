import { create } from "zustand";

export type TPLPStore = {
  sheetOpen: boolean;
  sheetBody: React.ReactElement | undefined;
  showBar: boolean;
  setSheetOpen: (isOpen: boolean) => void;
  setSheetBody: (body: React.ReactElement | undefined) => void;
  setShowBar: (show: boolean) => void;
}

export const usePLPStore = create<TPLPStore>((set) => ({
  sheetOpen: false,
  sheetBody: undefined,
  showBar: false,

  setSheetOpen: (isOpen: boolean) => {
    set({ sheetOpen: isOpen });
  },

  setSheetBody: (body: React.ReactElement | undefined) => {
    set({ sheetBody: body });
  },

  setShowBar: (show: boolean) => {
    set({ showBar: show });
  }
}))