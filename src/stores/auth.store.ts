import { create } from "zustand";
import { User } from '@firebase/auth';

export type TAuthStore = {
  uid: string;
  authData: User | null;
  isLoading: boolean;
  setAuth: (data: User | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<TAuthStore>((set) => ({
  uid: '',
  authData: null,
  isLoading: true,

  setAuth: (data: User | null) => {
    set({ uid: data ? data.uid : '', authData: data });
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  }
}))