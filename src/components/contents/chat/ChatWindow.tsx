import React, { useEffect, useRef } from 'react';
import { TChatMessage } from '../../../types/db';
import ChatMyMessage from './message/ChatMyMessage';
import ChatAIMessage from './message/ChatAIMessage';

const ChatWindow = ({ messages }: { messages: TChatMessage[] }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='flex flex-col gap-5'>
      {messages.map(message => {
        return (
          <React.Fragment key={message.id}>
            {message.sender === 'user' && <ChatMyMessage {...message} />}
            {message.sender === 'AI' && <ChatAIMessage {...message} />}
          </React.Fragment>
        );
      })}
      <div ref={endRef} />
    </div>
  );
};

export default ChatWindow;
