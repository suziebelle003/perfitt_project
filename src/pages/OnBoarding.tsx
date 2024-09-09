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


// 위에만 마진을 주고 아래 박스 크게 만들고 중간정렬, 근데 중간정렬할 때 위에 마진 조금 주기. 
// f12 해서 바로바로 보면서 하기 343 463

// 상태관리 변수 만들어서 onClick해서 2로 바꾸게 .. 