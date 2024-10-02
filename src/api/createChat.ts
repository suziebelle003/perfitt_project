import { addDoc, collection } from "firebase/firestore";
import { db } from "../service/firebase";
import { TChatMessage } from "../types/db";

export const createChat = async (messages: TChatMessage[]) => {
  try {
    const chatDoc = await addDoc(collection(db, 'chat'), {
      title: messages[0].text || '이미지 검색',
      messages: messages,
      datetime: new Date()
    })
    return chatDoc.id;
  } catch (error) {
    throw error;
  }
}