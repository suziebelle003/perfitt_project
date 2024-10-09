// 404 Not Found

import { useNavigate } from 'react-router-dom';
import { footprint404 } from '../assets/images/images';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full flex flex-col items-center pt-[20%]'>
      <img
        src={footprint404}
        alt='404 Not found'
        className='w-[252px] h-[123px] opacity-40'
      />
      <div className='w-full h-full bg-[#AAAAAA] mt-10'>
        <div className='w-full pl-[20%] text-4xl text-white font-semibold my-10'>
          PAGE
          <br />
          NOT
          <br />
          FOUND
          <br />
          <button
            className='mt-8 text-xl text-[#CCCCCC] hover:text-[#333333]'
            onClick={() => navigate('/chat')}
          >
            Go To Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
