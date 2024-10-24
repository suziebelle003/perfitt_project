import { create } from "zustand";
import { TUser } from "../types/db";
import { getUser } from "../api/firebase/getUser";

export type TUserStore = {
  user: TUser | null;
  fetchUserInfo: (uid: string) => void;
}

export const useUserStore = create<TUserStore>((set) => ({
  user: null,

  fetchUserInfo: async (uid: string) => {
    const data = await getUser(uid);
    set({ user: data });
  }
}))