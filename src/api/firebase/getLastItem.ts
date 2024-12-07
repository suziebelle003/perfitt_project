import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { TLikeProduct } from '../../types/like';
import { db } from '../../service/firebase';

export const getLastItem = async (uid: string): Promise<TLikeProduct[] | null> => {
  try {
    // if (!uid) {
    //   throw new Error('UID is missing or invalid');
    // }

    // 'latestProduct/{uid}' 경로의 도큐먼트를 가져옵니다.
    const lastItemDocRef = doc(db, 'latestProduct', uid);
    const lastItemDoc = await getDoc(lastItemDocRef);

    if (lastItemDoc.exists()) {
      const data: DocumentData = lastItemDoc.data();

      // Firebase DocumentData 형식을 TLikeProduct[]로 변환
      const products: TLikeProduct[] = data.products || []; // data.products가 존재할 때만
      return products;
    } else {
      console.error('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Failed to fetch last item:', error);
    throw error;
  }
};
