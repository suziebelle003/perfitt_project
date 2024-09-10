import { useEffect, useRef } from 'react';
import MyMessage from './message/MyMessage';
import AIMessage from './message/AIMessage';
import { IChatMessage } from '../../../../types/chat';

const ChatWindow = ({ chatMessage }: IChatMessage) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessage]);

  return (
    <div className=' flex flex-col'>
      <ul>
        {chatMessage.map(item => (
          <li key={item.id}>{item.target === 'user' ? <MyMessage text={item.message} /> : <AIMessage />}</li>
        ))}
      </ul>
      <div ref={messagesRef} />
    </div>
  );
};

export default ChatWindow;
