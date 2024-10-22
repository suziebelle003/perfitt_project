import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { TChatMessage } from "../types/db";

export const upsertChat = async (chatId: string, message: TChatMessage) => {
  try {
    await updateDoc(doc(db, 'chat', chatId), {
      datetime: new Date()
    });
    const {id, ...rest} = message;
    const messageId = id?.toString().padStart(20, '0') || '';
    await setDoc(doc(db, "chat", chatId, "messages", messageId), {...rest});
    return 'success';
  } catch (error) {
    throw error;
  }
};