const UserInfo = () => {
  return (
    <div>
      <div className='py-[25px] text-[14px] leading-[16.71px] font-medium'>
        <div className=''>내 정보</div>
        <div className=''>
          <div className='pt-[15px] flex flex-row '>
            <div className='text-[#808080] pr-[108px]'>이름</div>
            <div className=''>김이름</div>
          </div>
          <div className='pt-[16px] flex flex-row'>
            <div className='text-[#808080] pr-[108px]'>성별</div>
            <div className=''>여</div>
          </div>
          <div className='pt-[16px] flex flex-row '>
            <div className='text-[#808080] pr-[84px]'>생년월일</div>
            <div className=''>1999.10.11</div>
          </div>
          <div className='pt-[16px] flex flex-row'>
            <div className='text-[#808080] pr-[72px]'>평소사이즈</div>
            <div className=''>235mm</div>
          </div>
        </div>
      </div>
      <div className='bg-[#F5F5F5] h-[6px] mx-[-16px]'></div>
    </div>
  );
};
export default UserInfo;
