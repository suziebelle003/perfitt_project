import { useContext } from 'react';
import { AuthContext } from '../service/AuthContext';
import SignInSocialBtn from '../components/contents/signin/SignInSocialBtn';
import SignInAuthList from '../components/contents/signin/SignInAuthList';
import SignInAutoKeyword from '../components/contents/signin/SignInAutoKeyword';
import { perfittCircleLogo } from '../assets/images/images';

const SignIn = () => {
  const userInfo = useContext(AuthContext);
  const userName = userInfo?.displayName || userInfo?.email?.split('@')[0];

  return (
    <div className='p-4'>
      <div className='flex mt-[25px]'>
        <div className={`w-${userInfo ? 20 : 7} h-${userInfo ? 20 : 7}`}>
          <img
            src={perfittCircleLogo}
            alt='perfitt-logo'
          />
        </div>
        <div className='ml-2'>
          <p className='px-2.5 py-[5px] text-sm/[22px] break-words'>
            {userInfo ? (
              <>
                반갑습니다 {userName}님!
                <br />
                님을 위한 맞춤 상품을 추천해 드릴께요
                <SignInAuthList />
                <SignInAutoKeyword />
              </>
            ) : (
              <>
                안녕하세요 펄핏AI 입니다!
                <br /> 맞춤 추천을 위해 먼저 로그인을 해주세요.
              </>
            )}
          </p>
          {!userInfo && (
            <div className='mt-2'>
              <SignInSocialBtn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
