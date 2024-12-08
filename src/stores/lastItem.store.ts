import { create } from 'zustand';
import { getLastItem } from '../api/firebase/getLastItem';
import { TLikeProduct } from '../types/like';
import { upsertLastItem } from '../api/firebase/upsertLastItem';

type ItemStore = {
  items: { uid: string; products: TLikeProduct[] }[]; // 통합된 배열
  fetchItems: (uid: string) => Promise<void>; // 특정 유저의 최근 상품 가져오기
  getItemById: (uid: string, productId: string) => TLikeProduct | null; // 특정 유저의 상품 가져오기
  addToViewed: (uid: string, product: TLikeProduct) => void; // 상품을 본 목록에 추가
};

export const useItemStore = create<ItemStore>((set, get) => ({
  items: [], // Initialize as an empty array

  fetchItems: async (uid: string) => {
    try {
      // 특정 유저의 최근 상품 데이터를 가져오기
      const data = await getLastItem(uid);

      if (!data) {
        console.warn(`No data found for user with uid: ${uid}`);
        return; // 데이터가 없으면 상태를 업데이트하지 않음
      }

      // 상태 업데이트: 유저가 이미 존재하면 해당 데이터만 업데이트
      set(state => {
        const existingUserIndex = state.items.findIndex(user => user.uid === uid);

        if (existingUserIndex >= 0) {
          // 기존 유저의 상품 데이터를 갱신
          const updatedItems = [...state.items];
          updatedItems[existingUserIndex] = {
            ...state.items[existingUserIndex],
            products: data,
          };
          return { items: updatedItems };
        }

        // 유저가 없으면 새 데이터를 추가
        return {
          items: [...state.items, { uid, products: data }],
        };
      });
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  },

  getItemById: (uid: string, productId: string) => {
    const { items } = get();
    const userProducts = items.find(user => user.uid === uid)?.products;
    return userProducts?.find(product => product.productId === productId) || null;
  },

  addToViewed: (uid: string, product: TLikeProduct) => {
    set(state => {
      // 해당 유저가 이미 있는지 확인
      const existingUserIndex = state.items.findIndex(user => user.uid === uid);

      if (existingUserIndex >= 0) {
        const existingUser = state.items[existingUserIndex];

        // 중복 상품 확인
        const isDuplicate = existingUser.products.some(
          existingProduct => existingProduct.productId === product.productId
        );
        if (isDuplicate) {
          console.log(`Duplicate product found for uid: ${uid} with productId: ${product.productId}`);
          return state; // 중복되면 아무 작업도 하지 않음
        }

        // 중복이 아니면 상품을 추가
        const updatedProducts = [...existingUser.products, product];

        // 상태 업데이트
        const updatedItems = state.items.map((user, index) =>
          index === existingUserIndex ? { ...user, products: updatedProducts } : user
        );

        // Firestore에 데이터 업데이트
        upsertLastItem(uid, product.productId); // Firestore에 추가
        console.log(`Added product to viewed list for uid: ${uid}, productId: ${product.productId}`);

        return {
          items: updatedItems,
        };
      } else {
        // 유저가 없다면 새로운 유저와 상품을 추가
        upsertLastItem(uid, product.productId); // Firestore에 추가
        console.log(`Added new user and product to viewed list for uid: ${uid}, productId: ${product.productId}`);
        return {
          items: [...state.items, { uid, products: [product] }],
        };
      }
    });
  },
}));
