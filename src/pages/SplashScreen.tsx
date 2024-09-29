// Splash Screen

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { footprintIcon } from '../assets/icons/icons';
import { perfittLogo } from '../assets/images/images';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative w-full h-full flex justify-center items-center bg-black'>
      <div className='relative w-full min-h-[140px] blur-[2px]'>
        <img
          src={footprintIcon}
          alt='footprint'
          className='absolute top-2.5 left-7 w-[35px] h-20 rotate-[100deg] opacity-0 animate-footprint1'
        />
        <img
          src={footprintIcon}
          alt='footprint'
          className='absolute top-[60px] left-[80px] w-[35px] h-20 scale-x-[-1] rotate-[90deg] opacity-0 animate-footprint2'
        />
        <img
          src={footprintIcon}
          alt='footprint'
          className='absolute top-2.5 left-[135px] w-[35px] h-20 rotate-[85deg] opacity-0 animate-footprint3'
        />
        <img
          src={footprintIcon}
          alt='footprint'
          className='absolute top-12 left-[210px] w-[35px] h-20 scale-x-[-1] rotate-[75deg] opacity-0 animate-footprint4'
        />
        <img
          src={footprintIcon}
          alt='footprint'
          className='absolute -top-4 left-[255px] w-[35px] h-20 rotate-[67deg] opacity-0 animate-footprint5'
        />
        <img
          src={footprintIcon}
          alt='footprint'
          className='absolute top-2 left-80 w-[35px] h-20 scale-x-[-1] rotate-[54deg] opacity-0 animate-footprint6'
        />
      </div>
      <div
        className='absolute top-0 left-0 w-full h-full
          flex flex-col justify-center items-center z-10'
      >
        <img
          src={perfittLogo}
          alt='perfitt'
          className='contrast-0 brightness-200 animate-perfittFilter'
        />
        {/* <div className='text-gray-400'>FootFrint</div> */}
      </div>
    </div>
  );
}

export default SplashScreen;
