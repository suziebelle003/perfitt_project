import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { TChatMessage } from "../types/db";

export const updateChat = async (id: string, message: TChatMessage) => {
  try {
    await updateDoc(doc(db, 'chat', id), {
      messages: arrayUnion(message),
      datetime: new Date()
    });
    return 'success';
  } catch (error) {
    throw error;
  }
};