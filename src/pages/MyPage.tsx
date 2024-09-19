import Header from '../components/common/Header';

import UserInfo from '../components/contents/mypage/UserInfo';
import MyPageBottom from '../components/contents/mypage/MyPageBottom';
import UserProfile from '../components/contents/mypage/UserProfile';
import LikeAndShoes from '../components/contents/mypage/LikeAndShoes';

const MyPage = () => {
  return (
    <div className='flex flex-col flex-1'>
      <Header back />

      <UserProfile />

      <LikeAndShoes />

      <UserInfo />

      <MyPageBottom />
    </div>
  );
};
export default MyPage;
