import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

export const getUserChat = async (uid: string) => {
  try {
    const userChatDoc = await getDoc(doc(db, "userChat", uid));
    if (userChatDoc.exists()) return userChatDoc.data().chat;
  } catch (error) {
    throw error;
  }
};