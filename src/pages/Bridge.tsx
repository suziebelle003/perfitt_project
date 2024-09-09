import bridge from '../assets/images/bridge.jpg';

const Bridge = () => {
  return (
    <div className='h-full flex flex-col justify-center'>
      <div className='flex flex-1 flex-col justify-center items-center'>
        <img
          src={bridge}
          alt='bridge_img'
          className='w-[120px] h-[120px] rounded-full'
        />

        <div className='pt-[38px] text-center'>
          <div className='text-[18px] font-normal leading-7'>[Crocs] 올 터레인 클로그 블랙</div>
          <div className='text-[18px] font-semibold leading-6 py-[16px]'>
            ABC MART로 <br /> 이동 중입니다.
          </div>
          <div className='text-[16px] font-normal text-[#808080] leading-6'>잠시만 기다려 주세요.</div>
        </div>
      </div>
    </div>
  );
};
export default Bridge;
