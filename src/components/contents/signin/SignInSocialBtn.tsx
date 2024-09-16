import '../../css/fonts.css';
import '../../css/tailwind.css';
import googleLogo from '../../assets/images/google-logo.png';

const SignInSocialBtn = () => {
  const onClickSociallogin = () => {};
  return (
    <>
      <div
        className='w-[200px] h-[190px]'
        id='social_sign-in_buttons'
      >
        <div
          className='flex flex-col p-[8px] gap-[6px] text-[14px] font-normal'
          id='social_button_wrapper'
        >
          <button
            onClick={onClickSociallogin}
            className='flex items-center justify-center w-[184px] h-[32px] rounded-[4px] bg-[#F5F5F5]'
          >
            <div
              className='flex justify-center items-center
                w-[24px] h-[24px] mr-2
                bg-white rounded-full
                border border-[#EEEEEE]'
            >
              <img
                className='w-[16px] h-[16px]'
                src={googleLogo}
                alt='google logo'
              />
            </div>
            구글
          </button>
          <button
            onClick={onClickSociallogin}
            className='w-[184px] h-[32px] rounded-[4px] bg-[#F5F5F5]'
          >
            이메일 로그인
          </button>
          <span className='text-center w-[184px] h-[22px]'>또는</span>
          <button
            onClick={onClickSociallogin}
            className='w-[184px] h-[32px] rounded-[4px] bg-[#F5F5F5]'
          >
            회원가입 하기
          </button>
        </div>
      </div>
    </>
  );
};

export default SignInSocialBtn;
