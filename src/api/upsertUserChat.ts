import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebase";

export const upsertUserChat = async (uid: string, chatId: string) => {
  try {
    await setDoc(doc(db, 'userChat', uid), {
      chat: arrayUnion(chatId)
    })
    return 'success';
  } catch (error) {
    throw error;
  }
}