import plusIcon from '../../../assets/images/sidemenu-plus.svg';
const SideMenuTop = () => {
  return (
    <div>
      <div className='mt-[18px] pb-[15px] bg-[#F5F5F5] w-[89px] h-[36px] rounded-[96px]'>
        <div className='flex flex-row justify-center items-center py-[6px] pl-[7px] pr-[10px]'>
          <div className=''>
            <img
              src={plusIcon}
              alt=''
              width='18px'
              height='18px'
            />
          </div>
          <div className='text-[16px] text-[#A1A1AA] pl-[8px] tracking-tight leading-6'>새 채팅</div>
        </div>
      </div>
    </div>
  );
};
export default SideMenuTop;
