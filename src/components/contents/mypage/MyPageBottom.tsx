import arrow from '../../../assets/images/mypage-arrow.svg';

const MyPageBottom = () => {
  const editUserInfo = () => {};
  const editPassword = () => {};
  const goToCenterLink = () => {};

  return (
    <>
      <div className='pt-[25px] '>
        <div className='flex flex-row justify-between py-[16px] border-b-[1px] border-[#E4E4E7] mx-[-16px] pl-[16px]'>
          <div>내 정보 수정</div>
          <button onClick={editUserInfo}>
            <img
              src={arrow}
              alt=''
              className='pr-[21.5px]'
            />
          </button>
        </div>
        <div className='flex flex-row justify-between  py-[16px] border-b-[1px] border-[#E4E4E7] mx-[-16px] pl-[16px]'>
          <div>비밀번호 변경</div>
          <button onClick={editPassword}>
            <img
              src={arrow}
              alt=''
              className='pr-[21.5px]'
            />
          </button>
        </div>
        <div className='flex flex-row justify-between py-[16px] border-b-[1px] border-[#E4E4E7] mx-[-16px] pl-[16px]'>
          <div>고객센터</div>
          <button onClick={goToCenterLink}>
            <img
              src={arrow}
              alt=''
              className='pr-[21.5px]'
            />
          </button>
        </div>
      </div>
      <div className='flex flex-row pt-[39px] justify-center text-[14px] leading-[16.71px] font-norma text-[#808080]'>
        <div className='pr-[36px]'>회원탈퇴</div>
        <div>고객약관</div>
      </div>
    </>
  );
};
export default MyPageBottom;
