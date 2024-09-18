import Button from '../components/common/Button';
import onBoarding2 from '../assets/images/onboarding2.jpg';
import { TypeAnimation } from 'react-type-animation';

import { useState } from 'react';
import perfittLogo from '../assets/images/perfitt-logo.svg';
import plp1 from '../assets/images/onboarding_plp1.jpg';
import plp2 from '../assets/images/onboarding_plp2.jpg';

const OnBoarding = () => {
  const [state, setState] = useState('start');
  const [step, setStep] = useState(0);

  return (
    <div className='h-full p-4 flex flex-col items-center'>
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

      <div className='flex flex-1 justify-center'>
        <div className={` ${state === 'start' ? 'py-[50px]' : 'py-[59px]'}`}>
          {state === 'start' ? (
            <div className='w-[303px]'>
              {step >= 0 && (
                <div className='flex justify-end py-5'>
                  <span
                    className='bg-black rounded-md rounded-tr-none px-3.5 py-2.5 text-white text-[14px] leading-[22px] max-w-[300px] break-words'
                    style={{ textAlign: 'justify' }}
                  >
                    <TypeAnimation
                      sequence={[
                        '나이키 10만원대 운동화',
                        () => {
                          setTimeout(() => {
                            setStep(1);
                          }, 1000);
                        },
                      ]}
                      speed={50}
                      cursor={false}
                    />
                  </span>
                </div>
              )}
              {step >= 1 && (
                <div className='flex text-sm leading-[22px]'>
                  <div className='w-7 h-7'>
                    <img
                      src={perfittLogo}
                      alt='perfitt-logo'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <div
                      className='pl-3 pt-1 pb-3 max-w-[300px] break-words'
                      style={{ textAlign: 'justify' }}
                    >
                      <TypeAnimation
                        sequence={[
                          '가장 인기있는 나이키 10만원대 운동화입니다.',
                          () => {
                            setTimeout(() => {
                              setStep(2);
                            }, 1000);
                          },
                        ]}
                        speed={40}
                        cursor={false}
                      />
                    </div>
                    <img
                      src={plp1}
                      alt=''
                      width='220px'
                      height='103px'
                    />
                  </div>
                </div>
              )}

              {step >= 2 && (
                <div className='flex justify-end py-5'>
                  <span
                    className='bg-black rounded-md rounded-tr-none px-3.5 py-2.5 text-white text-[14px] leading-[22px] max-w-[300px] break-words'
                    style={{ textAlign: 'justify' }}
                  >
                    <TypeAnimation
                      sequence={[
                        '여름 운동화로 찾아줘',
                        () => {
                          setTimeout(() => {
                            setStep(3);
                          }, 1000);
                        },
                      ]}
                      speed={40}
                      cursor={false}
                    />
                  </span>
                </div>
              )}

              {step >= 3 && (
                <div className='flex text-sm leading-[22px]'>
                  <div className='w-7 h-7'>
                    <img
                      src={perfittLogo}
                      alt='perfitt-logo'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <div
                      className='pl-3 pt-1 pb-3 max-w-[300px] break-words'
                      style={{ textAlign: 'justify' }}
                    >
                      <TypeAnimation
                        sequence={[
                          '여름에 신기 알맞은 운동화로 추렸습니다.',
                          () => {
                            setTimeout(() => {}, 1000);
                          },
                        ]}
                        speed={40}
                        cursor={false}
                      />
                    </div>
                    <img
                      src={plp2}
                      alt=''
                      width='220px'
                      height='103px'
                    />
                  </div>
                </div>
              )}
            </div>
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
