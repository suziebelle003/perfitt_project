import { create } from 'zustand';
import { getLastItem } from '../api/firebase/getLastItem';
import { TLikeProduct } from '../types/like';

type LastItemStore = {
  latestItem: { uid: string; products: TLikeProduct[] }[] | null;
  fetchLatestItem: (uid: string) => Promise<void>;
  getLastItemById: (uid: string, productId: string) => TLikeProduct | null;
};

export const useLastItemStore = create<LastItemStore>((set, get) => ({
  latestItem: null,

  fetchLatestItem: async (uid: string) => {
    try {
      const products = await getLastItem(uid);
      set(state => ({
        latestItem: [...(state.latestItem || []), { uid, products }],
      }));
    } catch (error) {
      console.error('Error fetching latest item:', error);
    }
  },

  getLastItemById: (uid, productId) => {
    const { latestItem } = get();
    const userProducts = latestItem?.find(user => user.uid === uid)?.products;
    return userProducts?.find(shoe => shoe.productId === productId) || null;
  },
}));
