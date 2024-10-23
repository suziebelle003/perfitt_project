import firebase from "firebase/compat/app";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebase";

const formatDate = (datetime: firebase.firestore.Timestamp) => {
  const date = datetime.toDate();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}년 ${month}월 ${day}일`;
}

export const getSharedChat = async (chatId: string, sharedId: string) => {
  try {
    const chatDoc = await getDoc(doc(db, "chat", chatId, 'shared', sharedId));
    if (chatDoc.exists()) {
      return {
        count: chatDoc.data().count,
        datetime: formatDate(chatDoc.data().datetime)
      };
    } else {
      console.log("해당 문서가 없습니다.");
      return null;
    }
  } catch (error) {
    throw error;
  }
};