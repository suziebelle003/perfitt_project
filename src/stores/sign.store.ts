import { create } from "zustand";

export type TSignStore = {
  signSheetOpen: boolean;
  signSheetBody: React.ReactElement | undefined;
  setSignSheetOpen: (isOpen: boolean) => void;
  setSignSheetBody: (body: React.ReactElement | undefined) => void;
}

export const useSignStore = create<TSignStore>((set) => ({
  signSheetOpen: false,
  signSheetBody: undefined,

  setSignSheetOpen: (isOpen: boolean) => {
    set({ signSheetOpen: isOpen });
  },

  setSignSheetBody: (body: React.ReactElement | undefined) => {
    set({ signSheetBody: body });
  },
}))