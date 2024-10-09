import { useSignStore } from '../../../stores/sign.store';
import SignIn from '../../../pages/sign/SignIn';
import SignUp from '../../../pages/sign/SignUp';
import SignCardBtn from './SignCardBtn';
import { googleLogo } from '../../../assets/images/images';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../service/firebase';

const SignCard = () => {
  const { setSignSheetOpen, setSignSheetBody } = useSignStore();

  // 구글 로그인
  const signInGoogle = () => {
    // const provider = new GoogleAuthProvider();
    // try {
    //   const result = await signInWithPopup(auth, provider);
    //   setUserData(result.user); // 로그인 후 사용자 데이터를 상태에 설정
    //   console.log(result);
    //   navigate('/chat/signin ');
    // } catch (error) {
    //   console.error('구글 로그인 실패:', error);
    // }
  };

  // 이메일 로그인
  const signInEmail = () => {
    setSignSheetBody(<SignIn />);
    setSignSheetOpen(true);
  };

  // 회원가입
  const signUp = () => {
    setSignSheetBody(<SignUp />);
    setSignSheetOpen(true);
  };

  return (
    <div className='w-[200px] mt-0.5 mx-11 p-2 flex flex-col gap-1.5'>
      <SignCardBtn
        image={googleLogo}
        text='구글'
        onClick={signInGoogle}
      />
      <SignCardBtn
        text='이메일 로그인'
        onClick={signInEmail}
      />
      <div className='w-full text-sm/[22px] text-center'>또는</div>
      <SignCardBtn
        text='회원가입 하기'
        onClick={signUp}
      />
    </div>
  );
};

export default SignCard;
