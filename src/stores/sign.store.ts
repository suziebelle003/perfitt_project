import { create } from "zustand";
import { TGoogleUser } from "../types/sign";

export type TSignStore = {
  googleUser: TGoogleUser | undefined;
  signSheetOpen: boolean;
  signSheetBody: React.ReactElement | undefined;
  setGoogleUser: (user: TGoogleUser | undefined) => void;
  setSignSheetOpen: (isOpen: boolean) => void;
  setSignSheetBody: (body: React.ReactElement | undefined) => void;
}

export const useSignStore = create<TSignStore>((set) => ({
  googleUser: undefined,
  signSheetOpen: false,
  signSheetBody: undefined,

  setGoogleUser: (user: TGoogleUser | undefined) => {
    set({ googleUser: user });
  },

  setSignSheetOpen: (isOpen: boolean) => {
    set({ signSheetOpen: isOpen });
  },

  setSignSheetBody: (body: React.ReactElement | undefined) => {
    set({ signSheetBody: body });
  }
}))