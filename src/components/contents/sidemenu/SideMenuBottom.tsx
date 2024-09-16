import userprofile from '../../../assets/images/mypage-profile.svg';
const SideMenuBottom = () => {
  return (
    <div className='absolute p-4 bottom-0 left-0 w-full pt-[195px]'>
      <div className='border-t-[1px] border-[#E4E4E7] text-[16px] leading-6 tracking-tight'>
        <div className='pt-[16px]'>좋아요 | 최근 본</div>
        <div className='py-[14px]'>신발장</div>
        <div className='pb-[16px]'>내 발 정보</div>
      </div>

      <div className='flex flex-row items-center border-t-[1px] border-[#E4E4E7] h-[62px]'>
        <img
          src={userprofile}
          alt=''
          width='30px'
          height='30px'
        />
        <div className='pl-[8px] text-[16px] tracking-tight font-semibold leading-5'>김펄핏</div>
      </div>
    </div>
  );
};
export default SideMenuBottom;
