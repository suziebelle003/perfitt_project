import { perfittLogo } from '../../../../../assets/images/images';
import { IAIMessage } from '../../../../../types/chat';

const AIMessage = ({ text }: IAIMessage) => {
  return (
    <>
      <div className='px-4 flex text-sm leading-[22px] '>
        <div className='w-7 h-7'>
          <img
            src={perfittLogo}
            alt='perfitt-logo'
          />
        </div>
        <div className='pl-3 py-2 max-w-[300px] break-words'>{text}</div>
      </div>
    </>
  );
};
export default AIMessage;
