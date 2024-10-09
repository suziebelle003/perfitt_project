import ReactMarkdown from 'react-markdown';
import { emphasize } from '../../../../config/markdown';
import { TChatMessage } from '../../../../types/db';
import ChatCardContainer from '../card/ChatCardContainer';
import SignCard from '../../sign/SignCard';
import ChatRecommendCard from '../recommend/ChatRecommendCard';
import { perfittCircleLogo } from '../../../../assets/images/images';

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
      {message.id === 'sign' && <SignCard />}
      {message.id === 'recommend' && <ChatRecommendCard />}
    </div>
  );
};

export default ChatAIMessage;
