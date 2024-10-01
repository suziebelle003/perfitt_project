import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../service/firebase';

export const createNewChat = async () => {
  try {
    // firestore에 새 채팅 눌렀을 때 채팅방 데이터 참조해서 addDoc으로 새 채팅방 collection에 추가
    const chatRoomRef = await addDoc(collection(db, 'chatRoom'), {
      // 추후에 날짜별로 구분을 위해 작성
      createdAt: new Date(),
    });
    // 채팅방 고유 식별값 반환하여 url의 endPoint값 지정
    return chatRoomRef.id;
  } catch (err) {
    console.error('err', err);
  }
};
