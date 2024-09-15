import { useRef, useState } from 'react';
import { hamburgerButton } from '../../../assets/images/images';
import Button from '../../common/Button';
import Header from '../../common/Header';
import ChatInput from './ChatInput';
import ChatWindow from './chatwindow/ChatWindow';
import { IMessage } from '../../../types/chat';

import { useChatResponseMutation } from '../../../hooks/useChatMutation';

const ChatContainer = () => {
  const [chatMessage, setChatMessage] = useState<IMessage[]>([]);
  const [inputText, setInputText] = useState('');
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
        };

        // AI 메시지 배열에 추가
        setChatMessage(message => [...message, newAIMessage]);
      },
    });
  };

  return (
    <>
      <div className='h-screen flex flex-col '>
        <Header
          leftChild={
            <Button className='bg-inherit'>
              <img src={hamburgerButton} />
            </Button>
          }
        />
        <div className='flex-1 overflow-y-auto scrollbar-hide'>
          <ChatWindow chatMessage={chatMessage} />
        </div>

        <ChatInput
          setInputText={setInputText}
          inputText={inputText}
          handleMessage={handleMessage}
        />
      </div>
    </>
  );
};
export default ChatContainer;
