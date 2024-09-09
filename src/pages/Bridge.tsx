import bridge from '../assets/images/bridge.jpg';

const Bridge = () => {
  return (
    // <div className='h-full flex flex-col'>
    //   <div className='flex flex-1 justify-center'>
    //     <div className='flex flex-col h-[342px] w-[213px] items-center'>
    //       <div className='pt-[188px]'>
    //         <img
    //           src={bridge}
    //           alt='bridge_img'
    //           width='120px'
    //           height='120px'
    //         />
    //       </div>
    //       <div className='pt-38px'>df</div>
    //     </div>
    //   </div>
    // </div>
    <div className='h-full flex flex-col'>
      <div className='flex flex-1 justify-center'>
        <div className='flex flex-col h-[342px]  items-center'>
          <div className='pt-[188px]'>
            <img
              src={bridge}
              alt='bridge_img'
              width='120px'
              height='120px'
            />
          </div>
          <div className='pt-[38px] h-[132px] text-center'>
            <div className='text-[18px] font-normal leading-7'>[Crocs] 올 터레인 클로그 블랙</div>
            <div className='text-[18px] font-semibold leading-6 py-[16px]'>
              ABC MART로 <br /> 이동 중입니다.
            </div>
            <div className='text-[16px] font-normal text-[#808080] leading-6'>잠시만 기다려 주세요.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bridge;
