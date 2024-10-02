// 채팅창

// 이미지 검색
// markdown 수정
// 공유하기
// 싫어요
// 좋아요
// 브랜드 좋아요 -> plp?
// PLP
// brand image..

import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TChatMessage } from '../types/db';
import { useAuthStore } from '../stores/auth.store';
import useSendMessage from '../hooks/useSendMessage';
import ChatHeader from '../components/contents/chat/ChatHeader';
import ChatWindow from '../components/contents/chat/ChatWindow';
import ChatInput from '../components/contents/chat/ChatInput';

function Chat() {
  const navigate = useNavigate();
  const { uid, isLoading } = useAuthStore();

  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const id = searchParams.get('id');
  const context = searchParams.get('context');

  const [messages, setMessages] = useState<TChatMessage[]>([]);
  const messageIdRef = useRef(0);

  useEffect(() => {
    if (mode === 'new') {
    }
    if (context === 'sign') {
    }
    if (id) {
    } else {
    }
  }, [isLoading]);

  // message 전송
  const { sendMessage } = useSendMessage({ uid, id, messageIdRef, setMessages });

  if (isLoading) return <></>;

  return (
    <div className='relative w-full h-full flex flex-col'>
      <ChatHeader />
      <div className='pt-14 flex-1 flex flex-col overflow-y-auto scrollbar-hide'>
        <ChatWindow messages={messages} />
      </div>
      <ChatInput sendMessage={sendMessage} />
      {/* {userInfo ? <SignInAutoKeyword onKeywordSelect={handleKeywordSelect} /> : null}
      <ChatInput handleMessage={handleMessage} /> */}
    </div>
  );
}

export default Chat;
