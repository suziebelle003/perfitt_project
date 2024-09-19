import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import OBMyMessage from './OBMyMessage';
import OBAIMessage from './OBAIMessage';
import img1 from '../../../assets/images/ob-list1.png';
import img2 from '../../../assets/images/ob-list2.png';

function OBChat() {
  const [step, setStep] = useState(0);

  const stepUp = () => {
    setStep(prev => prev + 1);
  };

  return (
    <div className='w-[303px]'>
      {step >= 0 && (
        <OBMyMessage
          text={
            <TypeAnimation
              sequence={['나이키 10만원대 운동화', () => stepUp()]}
              speed={30}
              cursor={false}
            />
          }
        />
      )}
      {step >= 1 && (
        <OBAIMessage
          text={
            <TypeAnimation
              sequence={[
                '가장 인기있는 나이키 10만원대 운동화입니다.',
                () => {
                  setTimeout(() => {
                    stepUp();
                  }, 500);
                },
              ]}
              speed={30}
              cursor={false}
            />
          }
          imgSrc={img1}
        />
      )}
      {step >= 2 && (
        <OBMyMessage
          text={
            <TypeAnimation
              sequence={['여름 운동화로 찾아줘', () => stepUp()]}
              speed={30}
              cursor={false}
            />
          }
        />
      )}
      {step >= 3 && (
        <OBAIMessage
          text={
            <TypeAnimation
              sequence={[
                '여름에 신기 알맞은 운동화로 추렸습니다.',
                () => {
                  setTimeout(() => {
                    stepUp();
                  }, 500);
                },
              ]}
              speed={30}
              cursor={false}
            />
          }
          imgSrc={img2}
        />
      )}
    </div>
  );
}

export default OBChat;
