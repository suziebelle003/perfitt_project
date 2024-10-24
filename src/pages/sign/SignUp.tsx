// 회원가입

// 구글 팝업 에러

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { TUserInfo } from '../../types/sign';
import { useSignStore } from '../../stores/sign.store';
import { createUser } from '../../api/firebase/createUser';
import SignContainer from '../../components/contents/sign/SignContainer';
import SUInfoBasic from '../../components/contents/sign/signup/SUInfoBasic';
import SUInfoSize from '../../components/contents/sign/signup/SUInfoSize';

function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState<'basic' | 'size'>('basic');
  const [uid, setUid] = useState('');
  const { googleUser, setGoogleUser, setSignSheetOpen, setSignSheetBody } = useSignStore();

  const methods = useForm<TUserInfo>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      gender: '',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
      size: '',
    },
  });
  const {
    formState: { errors },
  } = methods;

  // 구글 회원가입, 기본 정보 가져오기
  useEffect(() => {
    if (googleUser) {
      setUid(googleUser.uid);
      methods.setValue('email', googleUser.email);
      methods.setValue('name', googleUser.name);
      setGoogleUser(undefined);
    }
  }, [googleUser]);

  // 회원가입, firestore User DB 저장
  const signUp = async (uid: string, data: TUserInfo) => {
    try {
      const result = await createUser(uid, data);
      if (result === 'success') {
        setSignSheetOpen(false);
        setSignSheetBody(undefined);
        alert('회원가입 성공');
        navigate('/chat?mode=keyword');
      } else throw new Error('Failed Sign Up');
    } catch (error) {
      throw error;
    }
  };

  // Click Button
  const handleSubmit = async (data: TUserInfo) => {
    if (step === 'basic') setStep('size');
    else {
      try {
        if (!googleUser) {
          // 이메일 회원가입
          const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
          await updateProfile(userCredential.user, { displayName: data.name });
          signUp(userCredential.user.uid, data);
        } else signUp(uid, data); // 구글 회원가입
      } catch (error) {
        console.log('Failed Sign Up: ', error);
        setSignSheetOpen(false);
        setSignSheetBody(undefined);
        alert('회원가입 실패');
        navigate('/chat?mode=sign');
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <SignContainer
        title='회원가입'
        handleSubmit={methods.handleSubmit(handleSubmit)}
        btnText={step === 'basic' ? '다음' : '가입 완료'}
        formClassName={step === 'size' ? 'gap-6' : ''}
        errorMessage={step === 'size' ? (errors.size?.message as string) : undefined}
      >
        {step === 'basic' && <SUInfoBasic />}
        {step === 'size' && <SUInfoSize />}
      </SignContainer>
    </FormProvider>
  );
}

export default SignUp;
