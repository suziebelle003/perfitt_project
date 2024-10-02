import ReactMarkdown from 'react-markdown';
import { emphasize } from '../../../../config/markdown';
import { TChatMessage } from '../../../../types/db';
import { perfittCircleLogo } from '../../../../assets/images/images';
import ChatCardContainer from '../card/ChatCardContainer';

const ChatAIMessage = (message: TChatMessage) => {
  return (
    <div className='flex flex-col'>
      <div className='mx-4 flex'>
        <img
          src={perfittCircleLogo}
          alt='perfitt-logo'
          className='w-7 h-7'
        />
        <div className='max-w-[90%] py-[3px] px-2.5 text-sm/[22px] break-words'>
          <ReactMarkdown components={emphasize}>{message.text || ''}</ReactMarkdown>
        </div>
      </div>
      {(message.products || message.brands) && <ChatCardContainer {...message} />}
    </div>
  );
};

export default ChatAIMessage;
