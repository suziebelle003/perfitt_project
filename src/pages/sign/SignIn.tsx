// 이메일 로그인

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { useSignStore } from '../../stores/sign.store';
import SignContainer from '../../components/contents/sign/SignContainer';
import SUInput from '../../components/contents/signup/SUInput';

function SignIn() {
  const navigate = useNavigate();
  const { setSignSheetOpen } = useSignStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // 로그인
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        setSignSheetOpen(false);
        navigate('/chat?mode=start');
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
      <SUInput
        label='아이디'
        className='px-4 py-3.5'
        id='email'
        placeholder='이메일을 입력해 주세요'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <SUInput
        label='비밀번호'
        className='px-4 py-3.5'
        type='password'
        id='password'
        placeholder='비밀번호를 입력해 주세요'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </SignContainer>
  );
}

export default SignIn;
