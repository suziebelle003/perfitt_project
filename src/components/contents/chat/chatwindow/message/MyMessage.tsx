import { IText } from '../../../../../types/chat';

const MyMessage = ({ text }: IText) => {
  return (
    <>
      <div className='flex justify-end px-4 py-5 '>
        <span className='bg-black rounded-md rounded-tr-none p-3 text-white text-[14px] leading-[22px] max-w-[300px] break-words'>
          {text}
        </span>
      </div>
    </>
  );
};

export default MyMessage;
