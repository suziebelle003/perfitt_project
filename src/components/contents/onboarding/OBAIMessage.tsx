import { ReactNode, useEffect, useState } from 'react';
import { perfittCircleLogo } from '../../../assets/images/images';

const OBAIMessage = ({ text, imgSrc }: { text: ReactNode; imgSrc: string }) => {
  const [img, setImg] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImg(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='mb-5'>
      <div className='flex items-center'>
        <div className='w-5 h-5'>
          <img
            src={perfittCircleLogo}
            alt='perfitt-logo'
          />
        </div>
        <div className='ml-2 text-sm/[22px]'>{text}</div>
      </div>
      {img && (
        <img
          src={imgSrc}
          alt=''
          className='w-[220px] h-[103px] mt-2 ml-[28px]'
        />
      )}
    </div>
  );
};
export default OBAIMessage;
