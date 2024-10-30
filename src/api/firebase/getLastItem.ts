import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../service/firebase';
import { getProduct } from './getProduct';
import { TLikeProduct } from '../../types/like'; // 제품 타입 정의

export const getLastItem = async (uid: string): Promise<TLikeProduct[]> => {
  try {
    const productsSnapshot = await getDocs(collection(db, 'latestProduct', uid, 'products'));

    // Promise.all을 사용해 모든 제품 정보를 병렬로 가져옴
    const LatestProductData = await Promise.all(
      productsSnapshot.docs.map(async product => {
        const shoeInfo = await getProduct(product.id);
        return {
          ...product.data(),
          ...shoeInfo,
          productId: product.id,
          datetime: product.data().datetime.toDate(),
        } as TLikeProduct;
      })
    );

    return LatestProductData;
  } catch (error) {
    console.error('Failed to fetch last item:', error);
    throw error;
  }
};
