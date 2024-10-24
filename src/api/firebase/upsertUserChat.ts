import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { db } from "../../service/firebase";

const setUserChat = async (uid: string, chatId: string) => {
  try {
    await setDoc(doc(db, 'userChat', uid), {
      chat: [chatId]
    })
    return 'success';
  } catch (error) {
    throw error;
  }
};

export const upsertUserChat = async (uid: string, chatId: string) => {
  try {
    await updateDoc(doc(db, 'userChat', uid), {
      chat: arrayUnion(chatId)
    })
    return 'success';
  } catch (error) {
    if (error instanceof FirebaseError && error.code === 'not-found')
      return setUserChat(uid, chatId);
    throw error;
  }
};