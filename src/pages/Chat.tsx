import { useRef, useState } from 'react';
import { IMessage } from '../types/chat';
import { useChatResponseMutation } from '../hooks/useChatMutation';
import ChatWindow from '../components/contents/chat/chatwindow/ChatWindow';
import ChatInput from '../components/contents/chat/ChatInput';
import ChatHeader from '../components/contents/chat/ChatHeader';

// 'chat/:id': '/chat/sign' | '/chat/new'
const Chat = () => {
  const [chatMessage, setChatMessage] = useState<IMessage[]>([]);
  const idRef = useRef(0);

  const { mutate: AIResponse } = useChatResponseMutation();

  const handleMessage = (text: string) => {
    const newMessage: IMessage = {
      id: idRef.current++,
      message: text,
      target: 'user',
    };

    // 사용자 메시지 추가
    setChatMessage(message => [...message, newMessage]);

    // 성공 시 API 데이터 뿌려주기
    AIResponse(text, {
      onSuccess: item => {
        const newAIMessage: IMessage = {
          id: idRef.current++,
          message: item.message,
          target: 'AI',
          products: item.products,
          brands: item.brands,
        };

        // AI 메시지 배열에 추가
        setChatMessage(AIMessage => [...AIMessage, newAIMessage]);
      },
      onError: error => {
        console.error('err', error);
      },
    });
  };

  return (
    <div className='relative w-full h-full flex flex-col'>
      <ChatHeader />
      <div className='flex-1 flex flex-col overflow-y-auto scrollbar-hide'>
        <div className='h-14'></div>
        <ChatWindow chatMessage={chatMessage} />
      </div>
      <ChatInput handleMessage={handleMessage} />
    </div>
  );
};

export default Chat;
