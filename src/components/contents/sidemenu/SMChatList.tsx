import { IChat } from '../../../types/chat';
import chatIcon from '../../../assets/icons/chat-icon.svg';

type TSMChatListProps = {
  date: string;
  chatlist: IChat[];
  handleLink: (link: string) => void;
};

function SMChatList({ date, chatlist, handleLink }: TSMChatListProps) {
  return (
    <div className='mt-[15px]'>
      <div className='mb-2 text-[14px] leading-6 font-semibold text-[#A1A1AA]'>{date}</div>
      {chatlist.map(chat => (
        <button
          key={chat.id}
          className='h-[34px] flex items-center gap-2'
          onClick={() => handleLink(`/chat/${chat.id}`)}
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
