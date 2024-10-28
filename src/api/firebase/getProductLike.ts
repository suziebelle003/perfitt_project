import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../service/firebase';
import { getProduct } from './getProduct';

export const getProductLike = async (uid: string) => {
  try {
    const products = await getDocs(collection(db, 'likeProduct', uid, 'products'));
    const ProductLikeData = [];
    for (const product of products.docs) {
      const shoeInfo = await getProduct(product.id);
      ProductLikeData.push({
        ...product.data(),
        ...shoeInfo,
        productId: product.id,
      });
    }
    return ProductLikeData;
  } catch (error) {
    throw error;
  }
};
