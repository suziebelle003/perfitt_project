import React, { ReactNode, useEffect, useRef } from 'react';
import { TChatMessage } from '../../../types/db';
import { usePLPStore } from '../../../stores/plp.store';
import ChatMyMessage from './message/ChatMyMessage';
import ChatAIMessage from './message/ChatAIMessage';

type TChatWindow = {
  messages: TChatMessage[];
  children?: ReactNode;
};

const ChatWindow = ({ messages, children }: TChatWindow) => {
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const { showBar } = usePLPStore();

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatWindowRef}
      className={`pt-14 flex-1 flex flex-col gap-5 overflow-y-auto scrollbar-hide
        ${showBar ? 'pb-[41px]' : 'pb-4'}`}
    >
      {messages.map(message => {
        return (
          <React.Fragment key={message.id}>
            {message.sender === 'user' && <ChatMyMessage {...message} />}
            {message.sender === 'AI' && <ChatAIMessage {...message} />}
          </React.Fragment>
        );
      })}
      {children}
    </div>
  );
};

export default ChatWindow;
