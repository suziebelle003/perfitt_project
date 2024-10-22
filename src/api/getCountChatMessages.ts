import { collection, getCountFromServer } from "firebase/firestore"
import { db } from "../service/firebase"

export const getCountChatMessages = async (chatId: string) => {
  const chatMessageCount = await getCountFromServer(collection(db, "chat", chatId, "messages"));
  return chatMessageCount.data().count;
}