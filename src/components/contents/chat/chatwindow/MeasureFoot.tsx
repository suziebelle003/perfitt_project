import { questionMark } from '../../../../assets/images/images';

const MeasureFoot = () => {
  return (
    <>
      <div className='ml-7 mr-[70px] h-auto  border rounded-md'>
        <div className='w-full rounded-t-md bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4'>
          <div className='flex flex-col'>
            <div>
              <span className='text-white text-base font-semibold'>내 발 측정하기</span>
              <p className='text-white text-xs'>AI 발 사이즈 추천</p>
            </div>
            <div className='w-full flex justify-end'>
              <img
                src={questionMark}
                alt='questionMark-icon'
              />
            </div>
          </div>
        </div>

        <div className='px-4 pt-4 pb-2'>
          <div>
            <span className='text-[#808080] leading-[22px] text-sm'>
              발 사이즈를 측정하면 AI가 분석해드려요.
              <br /> 원하는 신발의 사이즈를 추천받아보세요.
            </span>
          </div>
          <div className='pt-3'>
            <button className='w-full text-[10px] font-semibold border border-[#E4E4E7] rounded-[4px] px-[5px] py-[6px]'>
              내 발 사이즈 알아보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeasureFoot;
