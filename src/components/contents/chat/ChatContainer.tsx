import { useRef, useState } from 'react';
import { hamburgerButton } from '../../../assets/images/images';
import Button from '../../common/Button';
import Header from '../../common/Header';
import ChatInput from './ChatInput';
import ChatWindow from './chatwindow/ChatWindow';
import { IMessage } from '../../../types/chat';
import { textResponse } from '../../../utils/chat/AIData';
import KeyWordSelector from './chatwindow/keyword/KeyWordSelector';

const ChatContainer = () => {
  const [chatMessage, setChatMessage] = useState<IMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const idRef = useRef(0);

  const handleMessage = (text: string) => {
    const newMessage: IMessage = {
      id: idRef.current++,
      message: text,
      target: 'user',
    };

    // 사용자 메시지 추가
    setChatMessage(message => [...message, newMessage]);

    const newAIMessage: IMessage = {
      id: idRef.current++,
      message: textResponse(text),
      target: 'AI',
    };

    // AI 메세지 추가 (0.5초 딜레이)
    setTimeout(() => {
      setChatMessage(message => [...message, newAIMessage]);
    }, 500);
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
        <KeyWordSelector />
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
