import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../service/firebase';

export const deleteProductLike = async (uid: string, productId: string) => {
  try {
    await deleteDoc(doc(db, 'likeProduct', uid, 'products', productId));
    return 'success';
  } catch (error) {
    throw error;
  }
};
