import { useEffect, useRef } from 'react';
import { IChatWindow, IMessage } from '../../../../types/chat';
import MyMessage from './message/MyMessage';
import AIContainer from './message/AIContainer';

const ChatWindow = ({ chatMessage }: IChatWindow) => {
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessage]);

  return (
    <div className='flex flex-col px-4'>
      <ul>
        {chatMessage.map((item: IMessage) => (
          <li key={item.id}>
            {item.target === 'user' ? (
              <MyMessage text={item.message} />
            ) : (
              <AIContainer
                message={item.message}
                products={item.products}
                brands={item.brands}
              />
            )}
          </li>
        ))}
      </ul>
      <div ref={messagesRef} />
    </div>
  );
};

export default ChatWindow;
