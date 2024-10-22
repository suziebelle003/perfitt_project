import { create } from "zustand";

export type TChatStore = {
  chatId: string;
  chatTitle: string;
  setChatId: (id: string) => void;
  setChatTitle: (title: string) => void;
}

export const useChatStore = create<TChatStore>((set) => ({
  chatId: '',
  chatTitle: '',

  setChatId: (id: string) => {
    set({ chatId: id });
  },

  setChatTitle: (title: string) => {
    set({ chatTitle: title });
  }
}))