import { create } from "zustand";
import { getCountChatMessages } from "../api/getCountChatMessages";

export type TShareStore = {
  shareChatId: string;
  shareChatTitle: string | undefined;
  shareChatMessageId: number;
  shareModalOpen: boolean;
  setShareOpen: (chatId: string, title: string | undefined) => void;
  setShareClose: () => void;
}

export const useShareStore = create<TShareStore>((set) => ({
  shareChatId: '',
  shareChatTitle: undefined,
  shareChatMessageId: 0,
  shareModalOpen: false,

  setShareOpen: async (chatId: string, title: string | undefined) => {
    const count = await getCountChatMessages(chatId);
    set({
      shareChatId: chatId,
      shareChatTitle: title,
      shareChatMessageId: count,
      shareModalOpen: true
    })
  },

  setShareClose: () => {
    set({
      shareChatId: '',
      shareChatTitle: undefined,
      shareChatMessageId: 0,
      shareModalOpen: false
    });
  }
}))