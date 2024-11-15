import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../service/firebase';

export const getChatMessages = async (chatId: string) => {
  try {
    const messageDocs = await getDocs(collection(db, 'chat', chatId, 'messages'));
    const messages = messageDocs.docs
      .map(messageDoc => ({
        ...messageDoc.data(),
        id: messageDoc.id,
      }))
      .sort((a, b) => a.id.localeCompare(b.id));
    return messages;
  } catch (error) {
    throw error;
  }
};
