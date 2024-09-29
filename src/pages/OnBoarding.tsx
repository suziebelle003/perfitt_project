import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OBContainer from '../components/contents/onboarding/OBContainer';
import OBChat from '../components/contents/onboarding/OBChat';
import footScanning from '../assets/images/foot-scanning.png';
import { createNewChat } from '../service/CreateNewChat';

const OnBoarding = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'AIChat' | 'FootSize'>('AIChat');

  const handleCreateChat = async () => {
    const newRoom = await createNewChat();
    navigate(`/chat/${newRoom}`);
  };

  return (
    <div className='h-full p-4 flex flex-col items-center'>
      {view === 'AIChat' && (
        <OBContainer
          title={['AI에게 질문만으로', '원하는 신발을 찾아보세요!']}
          body={<OBChat />}
          btnText='다음'
          handleClick={() => setView('FootSize')}
        />
      )}
      {view === 'FootSize' && (
        <OBContainer
          title={['발촬영하면 원하는 신발의', '딱 맞는 사이즈를 추천해드려요.']}
          body={
            <img
              src={footScanning}
              alt='onBoarding_img'
              className='w-[200px] h-[396px] mt-[9px]'
            />
          }
          btnText='시작하기'
          handleClick={handleCreateChat}
        />
      )}
    </div>
  );
};

export default OnBoarding;
