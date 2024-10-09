import { useState } from 'react';
import SignContainer from '../../components/contents/sign/SignContainer';
import SUInfoBasic from '../../components/contents/sign/signup/SUInfoBasic';
import SUInfoSize from '../../components/contents/sign/signup/SUInfoSize';

function SignUp() {
  const [step, setStep] = useState<'basic' | 'size'>('basic');
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: '',
    gender: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    size: '',
    sizeType: '',
  });

  const handleChange = (id: string, value: string) => {
    setUserInfo(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step === 'basic') {
      setStep('size');
      return;
    }
  };

  return (
    <SignContainer
      title='회원가입'
      handleSubmit={handleSubmit}
      btnText={step === 'basic' ? '다음' : '가입 완료'}
      formClassName={step === 'size' ? 'gap-6' : ''}
    >
      {step === 'basic' && <SUInfoBasic />}
      {step === 'size' && (
        <SUInfoSize
          userInfo={userInfo}
          handleChange={handleChange}
        />
      )}
    </SignContainer>
  );
}

export default SignUp;
