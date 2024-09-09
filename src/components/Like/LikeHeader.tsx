import { useState } from 'react';

const LikeHeader = () => {
  const headers = ['Like', 'RecentView'];
  const [select, setSelect] = useState('Like');
  return (
    <>
      <div className='flex justify-around items-center mb-[19px]'>
        <ul
          className={`${select === 'Like' ? 'ml-[-1rem] border-black border-b-2 text-base text-center font-extrabold px- 4 py-2 h-10 w-full' : 'text-base text-center px- 4 py-2 h-10 w-full ml-[-1rem]'}`}
        >
          <li>
            <a onClick={() => setSelect('Like')}>좋아요</a>
          </li>
        </ul>
        <ul
          className={`${select === 'RecentView' ? 'mr-[-1rem] border-black  border-b-2 text-base text-center font-extrabold px- 4 py-2 h-10 w-full' : 'text-base text-center px- 4 py-2 h-10 w-full mr-[-1rem]'}`}
        >
          <li>
            <a onClick={() => setSelect('RecentView')}>최근본</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default LikeHeader;
