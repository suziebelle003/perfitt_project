import { useState } from 'react';

const LikeHeader = () => {
  const headers = ['Like', 'RecentView'];
  const [select, setSelect] = useState('Like');

  const leftStyle = 'ml-[-1rem] border-black border-b-2 text-base text-center font-extrabold px-4 py-2 h-10 w-full';
  const rightStyle = 'text-base text-center px-4 py-2 h-10 w-full ml-[-1rem]';

  return (
    <>
      <div className='flex justify-around items-center mb-[19px]'>
        <ul className={`${select === 'Like' ? `animate-fadeIn ${leftStyle} ` : `${rightStyle}`}`}>
          <li>
            <a onClick={() => setSelect('Like')}>좋아요</a>
          </li>
        </ul>
        <ul className={`${select === 'RecentView' ? `animate-fadeIn ${leftStyle} ` : `${rightStyle}`}`}>
          <li>
            <a onClick={() => setSelect('RecentView')}>최근본</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default LikeHeader;
