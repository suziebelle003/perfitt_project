import { useContext } from 'react';
import { AuthContext } from '../service/AuthContext';
import SignInSocialBtn from '../components/contents/signin/SignInSocialBtn';
import SignInAuthList from '../components/contents/signin/SignInAuthList';
import SignInAutoKeyword from '../components/contents/signin/SignInAutoKeyword';

const SignIn = () => {
  const userInfo = useContext(AuthContext);
  console.log('userInfo: ', userInfo);
  //chatwindow component와 , header component 부분
  return (
    <>
      {userInfo ? (
        <div>
          <p>반갑습니다{userInfo.displayName == null ? userInfo.email?.split('@')[0] : userInfo.displayName}님!</p>
          <p>
            {userInfo.displayName == null ? userInfo.email?.split('@')[0] : userInfo.displayName}님을 위한 맞춤 상품을
            추천해 드릴께요
          </p>
          <SignInAuthList />
          <SignInAutoKeyword />
        </div>
      ) : (
        <div>
          <p>안녕하세요 펄핏AI 입니다! </p>
          <p>맞춤 추천을 위해 먼저 로그인을 해주세요.</p>
          <SignInSocialBtn />
        </div>
      )}
    </>
  );
};

export default SignIn;
