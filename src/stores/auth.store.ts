import { create } from "zustand";
import { User } from '@firebase/auth';

export type TAuthStore = {
  uid: string;
  authData: User | null;
  isLoading: boolean;
  fetchAuth: (data: User | null) => void;
  fetchLoading: (loading: boolean) => void;
}

export const useAuthStore = create<TAuthStore>((set) => ({
  uid: '',
  authData: null,
  isLoading: true,

  fetchAuth: (data: User | null) => {
    set({ uid: data ? data.uid : '', authData: data });
  },

  fetchLoading: (loading: boolean) => {
    set({ isLoading: loading });
  }
}))