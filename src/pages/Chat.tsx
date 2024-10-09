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
import { usePLPStore } from '../stores/plp.store';
import { useSignStore } from '../stores/sign.store';
import { getChat } from '../api/getChat';
import useSendMessage from '../hooks/useSendMessage';
import ChatHeader from '../components/contents/chat/ChatHeader';
import ChatWindow from '../components/contents/chat/ChatWindow';
import ChatInput from '../components/contents/chat/ChatInput';
import BottomSheet from '../components/common/BottomSheet';
import ChatQuestions from '../components/contents/chat/recommend/ChatQuestions';

function Chat() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const id = searchParams.get('id');

  const { uid, authData, isLoading } = useAuthStore();

  const [messages, setMessages] = useState<TChatMessage[]>([]);
  const messageIdRef = useRef(0);

  const { signSheetOpen, signSheetBody, setSignSheetOpen } = useSignStore();
  const { sheetOpen, sheetBody, showBar, setSheetOpen } = usePLPStore();
  const [showInput, setShowInput] = useState(true);

  const signMessage = {
    id: 'sign',
    sender: 'AI',
    text: '안녕하세요 펄핏AI입니다!\n\n맞춤 추천을 위해 먼저 로그인을 해주세요.',
  };

  const startMessage = {
    id: 'recommend',
    sender: 'AI',
    text: `반갑습니다 ${authData?.displayName || '고객'}님!\n\n${authData?.displayName || '고객'}님을 위한 맞춤 상품을 추천해 드릴게요.`,
  };

  const redirectToChat = () => {
    if (!uid) navigate('/chat?mode=sign');
    else navigate('/chat?mode=start');
  };

  useEffect(() => {
    if (!isLoading) {
      if (!mode && !id) redirectToChat();
      else if (mode === 'sign' && !uid) setMessages([signMessage]);
      else if (mode === 'start' && uid) setMessages([startMessage]);
      else if (mode === 'new') setMessages([]);
      else if (id) getMessages();
      else redirectToChat();
    }
  }, [isLoading, mode, id]);

  // chat DB 가져오기
  const getMessages = async () => {
    const data = await getChat(id || '');
    if (data) setMessages(data.messages);
    else redirectToChat();
  };

  // message 전송
  const { sendMessage } = useSendMessage({ uid, id, messageIdRef, setMessages });

  // Open Bottom Sheet
  useEffect(() => {
    if (signSheetOpen) setSheetOpen(false);
    else if (sheetOpen) setSignSheetOpen(false);
    if (signSheetOpen || sheetOpen) {
      const timer = setTimeout(() => {
        setShowInput(false);
      }, 400);
      return () => clearTimeout(timer);
    } else setShowInput(true);
  }, [signSheetOpen, sheetOpen, showBar]);

  return (
    <div className='relative w-full h-screen flex flex-col overflow-hidden'>
      <ChatHeader />
      {!isLoading ? <ChatWindow messages={messages} /> : <div className='flex-1' />}
      {mode === 'start' && <ChatQuestions sendMessage={sendMessage} />}
      {showInput && <ChatInput sendMessage={sendMessage} />}
      <BottomSheet
        isOpen={sheetOpen}
        setIsOpen={setSheetOpen}
        showBar={showBar}
      >
        {sheetBody}
      </BottomSheet>
      <BottomSheet
        isOpen={signSheetOpen}
        setIsOpen={setSignSheetOpen}
        showBar={false}
      >
        {signSheetBody}
      </BottomSheet>
    </div>
  );
}

export default Chat;
