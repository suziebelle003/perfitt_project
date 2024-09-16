import { useEffect, useRef } from 'react';
import MyMessage from './message/MyMessage';
import AIMessage from './message/AIMessage';
import { IChatMessage } from '../../../../types/chat';
import AIContainer from './message/AIContainer';

const ChatWindow = ({ chatMessage }: IChatMessage) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessage]);

  return (
    <div className=' flex flex-col px-4'>
      <ul>
        {chatMessage.map(item => (
          <li key={item.id}>
            {item.target === 'user' ? <MyMessage text={item.message} /> : <AIContainer text={item.message} />}
          </li>
        ))}
      </ul>
      <div ref={messagesRef} />
    </div>
  );
};

export default ChatWindow;