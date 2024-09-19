import { useContext } from 'react';
import { AuthContext } from '../service/AuthContext';
import SignInSocialBtn from '../components/contents/signin/SignInSocialBtn';

const SignIn = () => {
  const userInfo = useContext(AuthContext);
  console.log(userInfo);

  return (
    <>
      {userInfo ? (
        <div>
          <p>로그인한 사용자: {userInfo.email}</p>
        </div>
      ) : (
        <div>
          <p>로그인 정보가 없습니다.</p>
        </div>
      )}
      <SignInSocialBtn />
    </>
  );
};

export default SignIn;
