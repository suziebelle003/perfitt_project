import Button from '../components/common/Button';
import onBoarding1 from '../assets/images/onboarding1.jpg'
import onBoarding2 from '../assets/images/onboarding2.jpg'

import { useState } from 'react';

const OnBoarding = () => {
  const [state, setState] = useState("start");

  const buttonHandler = () => {
    setState("end");
  }
 
  return (
    <div className="h-full flex flex-col">
      <div className="pt-[59px] pb-[20px] font-extrabold text-[24px] leading-9 text-center">
        {state === "start" ? <>AI에게 질문만으로  <br /> 원하는 신발을 찾아보세요! </>: <>발촬영하면 원하는 신발의  <br /> 딱 맞는 사이즈를 추천해드려요.</>}
      </div>
      <div className="flex flex-1 justify-center ">
        <div className={state === "start" ? 'py-[50px]' : 'py-[59px]'}>
        <img 
            src={state === "start" ? onBoarding1 : onBoarding2} 
            alt="onBoarding_img" 
            width={state === "start" ? '303px' : '200px'} 
            height={state === "start" ? '393px' : '396px'} 
          />
          </div>
      </div>

      
      <Button onClick={buttonHandler} className="top-[720px] left-[16px]">{state === "start" ? "다음": "시작하기"}</Button>
    </div>
  );
};
export default OnBoarding;
