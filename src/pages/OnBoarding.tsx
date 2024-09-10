import Button from '../components/common/Button';
import onBoarding1 from '../assets/images/onboarding1.jpg';
import onBoarding2 from '../assets/images/onboarding2.jpg';

import { useState } from 'react';

const OnBoarding = () => {
  const [state, setState] = useState('start');

  return (
    <div className='h-full flex flex-col'>
      <div className='pt-[59px] pb-[20px] font-extrabold text-[24px] leading-9 text-center'>
        {state === 'start' ? (
          <>
            AI에게 질문만으로 <br /> 원하는 신발을 찾아보세요!
          </>
        ) : (
          <>
            발촬영하면 원하는 신발의 <br /> 딱 맞는 사이즈를 추천해드려요.
          </>
        )}
      </div>
      <div className='flex flex-1 justify-center '>
        <div className={state === 'start' ? 'py-[50px]' : 'py-[59px]'}>
          {state === 'start' ? (
            <img
              src={onBoarding1}
              alt='onBoarding_img'
              className='w-[303px] h-[393px]'
            />
          ) : (
            <img
              src={onBoarding2}
              alt='onBoarding_img'
              className='w-[200px] h-[396px]'
            />
          )}
        </div>
      </div>
      <Button onClick={() => setState('end')}>{state === 'start' ? '다음' : '시작하기'}</Button>

    </div>
  );
};
export default OnBoarding;
