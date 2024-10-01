import { TChat } from '../../../types/db';
import { chatIcon } from '../../../assets/icons/icons';

type TSMChatListProps = {
  date: string;
  chatlist: TChat[];
  handleLink: (link: string) => void;
};

function SMChatList({ date, chatlist, handleLink }: TSMChatListProps) {
  return (
    <div className='mt-[15px]'>
      <div className='mb-2 text-[14px] leading-6 font-semibold text-[#A1A1AA]'>{date}</div>
      {chatlist.map(chat => (
        <button
          key={chat.chatId}
          className='h-[34px] flex items-center gap-2'
          onClick={() => handleLink(`/chat?id=${chat.chatId}`)}
        >
          <img
            src={chatIcon}
            alt='Chat'
            className='w-5 h-5'
          />
          <div className='max-w-[230px] text-base truncate'>{chat.title}</div>
        </button>
      ))}
    </div>
  );
}

export default SMChatList;
