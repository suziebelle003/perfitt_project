// 로그인

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useSignStore } from '../../stores/sign.store';
import SignContainer from '../../components/contents/sign/SignContainer';
import SignInputField from '../../components/contents/sign/SignInputField';
import SignInput from '../../components/contents/sign/SignInput';

function SignIn() {
  const navigate = useNavigate();
  const { setSignSheetOpen } = useSignStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 로그인
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        setSignSheetOpen(false);
        navigate('chat?mode=start');
      }
    } catch (error: any) {
      console.log(error);
      handleErrorMessage(error.code);
    }
  };

  // error message
  const handleErrorMessage = (code: string) => {
    switch (code) {
      case 'auth/invalid-email':
        setErrorMessage('* 유효하지 않은 이메일 주소입니다.');
        break;
      case 'auth/user-not-found':
        setErrorMessage('* 해당 이메일과 일치하는 계정을 찾을 수 없습니다.');
        break;
      case 'auth/wrong-password':
        setErrorMessage('* 잘못된 비밀번호입니다.');
        break;
      default:
        setErrorMessage('* 로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <SignContainer
      title='로그인'
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
      btnText='로그인'
    >
      <SignInputField
        title='아이디'
        htmlFor='email'
      >
        <SignInput
          type='text'
          id='email'
          value={email}
          placeholder='이메일을 입력해 주세요'
          onChange={e => setEmail(e.target.value)}
          autoComplete='email'
        />
      </SignInputField>
      <SignInputField
        title='비밀번호'
        htmlFor='password'
      >
        <SignInput
          type='password'
          id='password'
          value={password}
          placeholder='비밀번호을 입력해 주세요'
          onChange={e => setPassword(e.target.value)}
          autoComplete='current-password'
        />
      </SignInputField>
    </SignContainer>
  );
}

export default SignIn;
