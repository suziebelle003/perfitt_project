import { addDoc, collection } from "firebase/firestore";
import { db } from "../service/firebase";

export const upsertChatShare = async (chatId: string, count: number) => {
  try {
    const sharedChatDoc = await addDoc(collection(db, "chat", chatId, "shared"), {
      count: count,
      datetime: new Date()
    });
    return sharedChatDoc.id;
  } catch (error) {
    throw error;
  }
};