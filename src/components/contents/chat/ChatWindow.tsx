import React, { useEffect, useRef } from 'react';
import { TChatMessage } from '../../../types/db';
import { usePLPStore } from '../../../stores/plp.store';
import ChatMyMessage from './message/ChatMyMessage';
import ChatAIMessage from './message/ChatAIMessage';

const ChatWindow = ({ messages }: { messages: TChatMessage[] }) => {
  const isChat = window.location.pathname.startsWith('/chat');
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const { showBar } = usePLPStore();

  useEffect(() => {
    if (isChat && chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatWindowRef}
      className={`flex-1 flex flex-col gap-5 scroll-smooth overflow-y-auto scrollbar-hide
        ${showBar ? 'pb-[41px]' : 'pb-4'}
        ${isChat ? 'pt-14' : 'py-5'}`}
    >
      {messages.map(message => {
        return (
          <React.Fragment key={message.id}>
            {message.sender === 'user' && <ChatMyMessage {...message} />}
            {message.sender === 'AI' && <ChatAIMessage {...message} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ChatWindow;
