import { TChat } from '../../../types/db';
import { useShareStore } from '../../../stores/share.store';
import { chatIcon, exportWhiteIcon, trashWhiteIcon } from '../../../assets/icons/icons';

type TSMChatListProps = {
  date: string;
  chatlist: TChat[];
  handleLink: (link: string) => void;
};

function SMChatList({ date, chatlist, handleLink }: TSMChatListProps) {
  const { setShareOpen } = useShareStore();

  const deleteChat = () => {};

  return (
    <div className='mt-[15px]'>
      <div className='mb-2 text-[14px] leading-6 font-semibold text-[#A1A1AA]'>{date}</div>
      {chatlist.map(chat => (
        <div
          key={chat.chatId}
          className='relative w-full h-[34px] flex overflow-hidden'
        >
          <button
            className='h-[34px] flex items-center gap-2'
            onClick={() => handleLink(`/chat?id=${chat.chatId}`)}
          >
            <img
              src={chatIcon}
              alt='Chat'
              className='w-5 h-5'
            />
            <div className='text-base whitespace-nowrap'>{chat.title}</div>
          </button>

          {/* 공유 & 삭제 */}
          <div className='ml-2.5 h-full flex'>
            <button
              className='w-[45px] h-full bg-[#A1A1AA] hover:opacity-90'
              onClick={() => setShareOpen(chat.chatId, chat.title)}
            >
              <img
                src={exportWhiteIcon}
                alt='Share chat'
                className='m-auto'
              />
            </button>
            <button
              className='w-[45px] h-full bg-[#F87171] hover:opacity-90'
              onClick={deleteChat}
            >
              <img
                src={trashWhiteIcon}
                alt='Delete chat'
                className='m-auto'
              />
            </button>
          </div>

          <div className='absolute w-full h-full flex justify-between pointer-events-none'>
            <div className='w-[18px] h-full' />
            {/* <div className='w-[18px] h-full bg-gradient-to-r from-white to-transparent' /> */}
            <div className='w-[18px] h-full bg-gradient-to-r from-transparent to-white' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SMChatList;
