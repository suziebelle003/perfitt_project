import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../service/firebase";
import { TChatMessage } from "../../types/db";

export const createChat = async (messages: TChatMessage[], title?: string) => {
  try {
    const chatDoc = await addDoc(collection(db, 'chat'), {
      title: title || messages[0].text || '이미지 검색',
      datetime: new Date()
    })
    if (chatDoc.id) {
      const messagePromises = messages.map((message, index) =>{
        const {id, ...rest} = message;
        const messageId = id?.toString().padStart(20, '0') || index.toString().padStart(20, '0');
        return setDoc(doc(db, 'chat', chatDoc.id, 'messages', messageId), {...rest})}
      );
      await Promise.all(messagePromises);
      return chatDoc.id;
    }
  } catch (error) {
    throw error;
  }
}