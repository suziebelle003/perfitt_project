import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../service/firebase';

export const upsertProductLike = async (uid: string, productId: string) => {
  try {
    const shoeDocRef = doc(db, 'likeProduct', uid, 'products', productId);
    await setDoc(
      shoeDocRef,
      {
        products: {
          productId: productId,
        },
      },
      { merge: true }
    );
    return 'success';
  } catch (error) {
    throw error;
  }
};
