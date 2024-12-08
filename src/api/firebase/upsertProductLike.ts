import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../service/firebase';

export const upsertProductLike = async (uid: string, productId: string) => {
  try {
    const productsCollectionRef = collection(db, 'likeProduct', uid, 'products');
    const productDocRef = doc(productsCollectionRef, productId);

    const existingDoc = await getDoc(productDocRef);
    if (existingDoc.exists()) {
      console.log('Product already liked:', existingDoc.data());
    } else {
      await setDoc(productDocRef, { productId: productId });
      console.log('Product liked successfully');
    }

    return 'success';
  } catch (error) {
    console.error('Error upserting product like:', error);
    throw error;
  }
};
