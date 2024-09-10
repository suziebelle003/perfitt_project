import { useRef, useState } from 'react';
import { hamburgerButton } from '../../../assets/images/images';
import Button from '../../common/Button';
import Header from '../../common/Header';
import ChatInput from './ChatInput';
import ChatWindow from './chatwindow/ChatWindow';
import { IMessage } from '../../../types/chat';

const ChatContainer = () => {
  const [chatMessage, setChatMessage] = useState<IMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const idRef = useRef(0);

  const handleMessage = () => {
    const newMessage: IMessage = {
      id: idRef.current++,
      message: inputText,
      target: 'user',
    };

    setChatMessage([...chatMessage, newMessage]);
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
