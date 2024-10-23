import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { TChatMessage, TSharedChat } from '../../types/db';
import { getChat } from '../../api/firebase/getChat';
import { getSharedChat } from '../../api/firebase/getSharedChat';
import { getChatMessages } from '../../api/firebase/getChatMessages';
import ChatWindow from '../../components/contents/chat/ChatWindow';
import Button from '../../components/common/Button';
import { chatIcon } from '../../assets/icons/icons';

function SharedChat() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const sharedId = searchParams.get('id');

  const [chatData, setChatData] = useState<TSharedChat>();
  const [messages, setMessages] = useState<TChatMessage[]>([]);

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
      navigate('/404');
    }
  }, []);

  // chat DB 가져오기
  const getData = async () => {
    const chatData = await getChat(id || '');
    if (chatData) {
      const sharedChatData = await getSharedChat(id || '', sharedId || '');
      if (sharedChatData) {
        setChatData({
          ...sharedChatData,
          title: chatData.title,
        });
        const data = await getChatMessages(id || '');
        if (data) {
          setMessages(data.slice(0, sharedChatData.count));
        } else throw new Error('Chat does not exist');
      } else throw new Error('Unshared chat');
    } else throw new Error('Chat does not exist');
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='p-4 flex flex-col gap-2 bg-white border border-[#E4E4E7]'>
        <img
          src={chatIcon}
          alt='Shared chat'
          className='w-5 h-5'
        />
        <div className='text-xl/[30px] font-semibold tracking-[-0.02em] text-[#18181B]'>{chatData?.title}</div>
        <div className='text-sm/[22px] text-[#52525B]'>{chatData?.datetime?.toString()}</div>
      </div>
      <ChatWindow messages={messages} />
      <div className='p-4'>
        <Button onClick={() => navigate('/onboarding')}>핏톡 시작하기</Button>
      </div>
    </div>
  );
}

export default SharedChat;
