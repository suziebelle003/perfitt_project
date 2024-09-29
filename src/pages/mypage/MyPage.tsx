import UserInfo from '../../components/contents/mypage/UserInfo';
import MyPageBottom from '../../components/contents/mypage/MyPageBottom';
import UserProfile from '../../components/contents/mypage/UserProfile';
import LikeAndShoes from '../../components/contents/mypage/LikeAndShoes';
import HeaderLayout from '../../layout/HeaderLayout';

const MyPage = () => {
  return (
    <HeaderLayout back>
      <UserProfile />

      <LikeAndShoes />

      <UserInfo />

      <MyPageBottom />
    </HeaderLayout>
  );
};
export default MyPage;
