import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../service/firebase';

export const upsertLastItem = async (uid: string, product: any) => {
  try {
    const shoeDocRef = doc(db, 'latestProduct', uid);

    await setDoc(
      shoeDocRef,
      {
        products: arrayUnion({
          productId: product.productId,
          datetime: new Date(), // 제품을 추가한 시간 기록
        }),
      },
      { merge: true }
    );

    console.log('Last item upserted successfully.');
    return 'success';
  } catch (error) {
    console.error('Error upserting last item:', error);
    throw new Error('Could not save the last item. Please try again later.');
  }
};
