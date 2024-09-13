import { IText } from '../../../../../types/chat';

const MyMessage = ({ text }: IText) => {
  return (
    <>
      <div className='flex justify-end  py-5'>
        <span className='bg-black rounded-md rounded-tr-none px-3.5 py-2.5 text-white text-[14px] leading-[22px] max-w-[300px] break-words'>
          {text}
        </span>
      </div>
    </>
  );
};

export default MyMessage;
