import { create } from 'zustand';
import { TProduct } from '../types/db';
import { getProductLike } from '../api/firebase/getProductLike';
import { upsertProductLike } from '../api/firebase/upsertProductLike';
import { deleteProductLike } from '../api/firebase/deleteProductLike';

export type TProductLikeStore = {
  productLike: { uid: string; products: TProduct[] }[] | null; // 각 유저의 찜 상품을 저장
  fetchProductLike: (uid: string) => Promise<void>; // 특정 유저의 찜 상품 가져오기
  getProductById: (uid: string, productId: string) => TProduct | null; // 특정 유저의 상품을 가져오는 함수
  addProductToLikeList: (uid: string, product: TProduct) => void; // 특정 유저의 찜 목록에 상품 추가
  removeProductFromLikeList: (uid: string, productId: string) => void; // 특정 유저의 찜 목록에서 상품 제거
};

export const useProductLikeStore = create<TProductLikeStore>((set, get) => ({
  productLike: null,

  fetchProductLike: async (uid: string) => {
    const products = await getProductLike(uid);
    set({ productLike: [{ uid, products }] });
  },

  getProductById: (uid, productId) => {
    const { productLike } = get();
    const userProducts = productLike?.find(user => user.uid === uid)?.products;
    return userProducts?.find(shoe => shoe.productId === productId) || null;
  },

  addProductToLikeList: (uid, product) => {
    set(state => {
      const userIndex = state.productLike?.findIndex(user => user.uid === uid);
      if (userIndex !== undefined && userIndex >= 0 && state.productLike) {
        const updatedProducts = [...state.productLike[userIndex].products, product];
        upsertProductLike(uid, product.productId);
        return {
          productLike: state.productLike.map((user, index) =>
            index === userIndex ? { ...user, products: updatedProducts } : user
          ),
        };
      } else {
        upsertProductLike(uid, product.productId);
        return {
          productLike: [...(state.productLike || []), { uid, products: [product] }],
        };
      }
    });
  },

  removeProductFromLikeList: (uid, productId) => {
    set(state => {
      const userIndex = state.productLike?.findIndex(user => user.uid === uid);
      if (userIndex !== undefined && userIndex >= 0 && state.productLike) {
        const updatedProducts = state.productLike[userIndex].products.filter(
          product => product.productId !== productId
        );
        deleteProductLike(uid, productId);
        return {
          productLike: state.productLike.map((user, index) =>
            index === userIndex ? { ...user, products: updatedProducts } : user
          ),
        };
      }
      return state;
    });
  },
}));
