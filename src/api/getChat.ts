import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

export const getChat = async (chatId: string) => {
  try {
    const chatDoc = await getDoc(doc(db, "chat", chatId));
    if (chatDoc.exists()) {
      return {
        title: chatDoc.data().title,
        messages: chatDoc.data().messages,
        datetime: chatDoc.data().datetime
      };
    } else {
      console.log("해당 문서가 없습니다.");
      return null;
    }
  } catch (error) {
    throw error;
  }
};