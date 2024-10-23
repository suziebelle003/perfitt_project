import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../service/firebase";

export const upsertUserChat = async (uid: string, chatId: string) => {
  try {
    await updateDoc(doc(db, 'userChat', uid), {
      chat: arrayUnion(chatId)
    })
    return 'success';
  } catch (error) {
    throw error;
  }
}