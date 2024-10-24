// 마이 페이지

// 로그인 안 했을 때 로그인 link
// 프로필 사진 변경
// 내 정보 수정 link 변경
// 비밀번호 변경 link 변경
// 고객센터 link 변경
// 회원탈퇴

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth.store';
import { useUserStore } from '../../stores/user.store';
import HeaderLayout from '../../layout/HeaderLayout';
import MPLinkButton from '../../components/contents/mypage/MPLinkButton';
import { cameraMiniIcon, heartLineIcon, smileIcon, userBorderIcon } from '../../assets/icons/icons';
import BottomSheet from '../../components/common/BottomSheet';
import UUProfile from '../../components/contents/mypage/UUProfile';

function MyPage() {
  const navigate = useNavigate();
  const { uid } = useAuthStore();
  const { user, fetchUserInfo } = useUserStore();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const userprofileurl = user?.profile ? user.profile : userBorderIcon;
  const toggleProfileModal = () => {
    setIsProfileModalOpen(prev => !prev);
  };

  useEffect(() => {
    fetchUserInfo(uid);
  });

  return (
    <div className='w-full h-full relative'>
      <HeaderLayout back>
        <div className='h-full flex flex-col'>
          <div className='flex-1'>
            {/* user profile */}
            <div className='flex flex-col justify-center items-center'>
              <div className='relative w-20 h-20'>
                <img
                  src={userprofileurl}
                  alt='User profile'
                  className='w-full h-full object-cover rounded-full overflow-hidden'
                />
                <button
                  className='absolute bottom-0 right-0 w-5 h-5
              flex justify-center items-center
              rounded-full bg-white shadow-[0_0_2.67px_0_#00000040]'
                  onClick={toggleProfileModal}
                >
                  <img
                    src={cameraMiniIcon}
                    alt='Edit user image'
                    className='w-[14px] h-[14px]'
                  />
                </button>
              </div>

              <div className='mt-[17px] flex flex-col items-center gap-2 mb-[20px]'>
                <p className='text-[15px] leading-[18px]'>안녕하세요!</p>
                <div className='text-[20px] leading-6'>
                  <span className='font-medium tracking-[0.25em]'>{user?.name}</span>
                  <span className='font-light'>님</span>
                </div>
              </div>
            </div>

            {/* like & shoerack */}
            <div className='flex border-y-[6px] border-y-[#F5F5F5]'>
              <button
                className='flex-1 flex justify-center items-center gap-2.5 h-[60px] hover:bg-[#F5F5F5]'
                onClick={() => navigate('/mypage/item?mode=like')}
              >
                <img
                  src={heartLineIcon}
                  alt='Liked item'
                  className='w-[14px] h-[13px]'
                />
                <div className='text-[14px] font-medium'>좋아요</div>
              </button>
              <button
                className='flex-1 flex justify-center items-center gap-2.5 h-[60px]
            border-l border-[#F5F5F5] hover:bg-[#F5F5F5]'
                onClick={() => navigate('/shoerack')}
              >
                <img
                  src={smileIcon}
                  alt='Shoe rack'
                  className='w-[14px] h-[14px]'
                />
                <div className='text-[14px] font-medium'>신발장</div>
              </button>
            </div>

            {/* user info */}
            <div
              className='px-4 py-[25px] flex flex-col gap-[15px]
          border-b-[6px] border-b-[#F5F5F5]
          text-[14px] leading-[17px] font-medium'
            >
              내 정보
              <div className='flex flex-col gap-4'>
                <div className='flex gap-2.5'>
                  <div className='w-[123px] text-[#808080]'>이름</div>
                  <div className='font-normal'>{user?.name}</div>
                </div>
                <div className='flex gap-2.5'>
                  <div className='w-[123px] text-[#808080]'>성별</div>
                  <div className='font-normal'>{user?.gender}</div>
                </div>
                <div className='flex gap-2.5'>
                  <div className='w-[123px] text-[#808080]'>생년월일</div>
                  <div className='font-normal'>
                    {user?.birth?.year}.{user?.birth?.month}.{user?.birth?.day}
                  </div>
                </div>
                <div className='flex gap-2.5'>
                  <div className='w-[123px] text-[#808080]'>평소사이즈</div>
                  <div className='font-normal'>{user?.size}</div>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <MPLinkButton
                title='내 정보 수정'
                imgAlt='Edit my infomation'
                link='/mypage/updateinfo'
              />
              <MPLinkButton
                title='비밀번호 변경'
                imgAlt='Change password'
                link='/mypage/updatepassword'
              />
              <MPLinkButton
                title='고객센터'
                imgAlt='Customer service'
                link='/'
              />
            </div>
          </div>

          {/* bottom */}
          <div
            className='mt-6 flex justify-center gap-9 py-[30px]
            text-[14px] leading-[17px] text-[#808080] hover:underline'
          >
            <button onClick={() => navigate('/mypage/deleteuser')}>회원탈퇴</button>
            {/* <button>고객약관</button> */}
          </div>
        </div>
        {isProfileModalOpen && (
          <BottomSheet
            isOpen={isProfileModalOpen}
            setIsOpen={toggleProfileModal}
            children={<UUProfile />}
            showBar={false}
          />
        )}
      </HeaderLayout>
    </div>
  );
}
export default MyPage;
