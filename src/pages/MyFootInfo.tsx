import Header from '../components/common/Header';
import myfoot from '../assets/images/foot-loading.gif';
import Button from '../components/common/Button';
const MyFootInfo = () => {
  return (
    <>
      <Header
        title='내 발 정보'
        leftBtn='back'
      />
      <div className='h-full flex flex-col p-4'>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <img
            src={myfoot}
            alt='myfoot'
            className='w-[284px] h-[191px]'
          />
          <div className='text-center mt-[-10px]'>
            <div className='text-[16px] leading-5 font-semibold'>발 정보가 아직 없습니다</div>
            <div className='text-[#808080] leading-[22px] font-normal pt-[8px]'>
              발 촬영으로 내 발 리포트를 받아보세요.
            </div>
          </div>
        </div>
        <Button>내 발 측정하기</Button>
      </div>
    </>
  );
};
export default MyFootInfo;
