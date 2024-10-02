import { TChatMessage } from '../types/db';
import { createChat } from '../api/createChat';
import { updateChat } from '../api/updateChat';
import { useChatResponseMutation } from '../hooks/useChatMutation';
import { useNavigate } from 'react-router-dom';
import { upsertUserChat } from '../api/upsertUserChat';

type TUseSendMessageProps = {
  uid: string;
  id?: string | null;
  messageIdRef: React.MutableRefObject<number>;
  setMessages: React.Dispatch<React.SetStateAction<TChatMessage[]>>;
}

const useSendMessage = ({uid, id, messageIdRef, setMessages}: TUseSendMessageProps) => {
  const navigate = useNavigate();
  const { mutate: AIResponse } = useChatResponseMutation();

  const sendMessage = async (message: TChatMessage) => {
    try {
      const userMessage = {
        ...message,
        sender: 'user',
        id: ++messageIdRef.current,
      };

      if (id) {
        const res = await updateChat(id, userMessage);
        if (res === 'success') setMessages(prev => [...prev, userMessage]);
      }

      if (userMessage.text) {
        AIResponse(userMessage.text, {
          onSuccess: async data => {
            const { message, ...rest } = data;
            const aiMessage: TChatMessage = {
              ...rest,
              ...(data.products ? { products: data.products.slice(0, 5) } : {}),
              ...(data.brands ? { brands: data.brands.slice(0, 7) } : {}),
              text: message,
              sender: 'AI',
              id: ++messageIdRef.current,
            };

            if (id) {
              const res = await updateChat(id, aiMessage);
              if (res === 'success') setMessages(prev => [...prev, aiMessage]);
            } else {
              const chatId = await createChat([userMessage, aiMessage]);
              if (chatId) {
                if (uid !== '') {
                  const res = await upsertUserChat(uid, chatId);
                  if (res === 'success') navigate(`/chat?id=${chatId}`);
                } else navigate(`/chat?id=${chatId}`);
              }
            }
          },
          onError: error => {
            console.log(error);
          },
        });
      }

      return 'success';
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return { sendMessage };
};

export default useSendMessage;
