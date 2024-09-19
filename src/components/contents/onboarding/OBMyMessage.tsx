import { ReactNode } from 'react';

const OBMyMessage = ({ text }: { text: ReactNode }) => {
  return (
    <div className='flex justify-end mb-5'>
      <span
        className='max-w-[80%] px-3 py-[7.5px] bg-black rounded-md rounded-tr-none
          text-[14px] leading-[17px] font-semibold text-white break-words'
      >
        {text}
      </span>
    </div>
  );
};

export default OBMyMessage;
