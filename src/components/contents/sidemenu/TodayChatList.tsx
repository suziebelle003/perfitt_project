import Question from './Question';

const TodayChatList = () => {
  return (
    <>
      <div className='py-[15px] '>
        <div className='h-[24px] pb-[8px] items-center text-[14px] leading-[17px]  text-[#A1A1AA] font-semibold '>
          오늘
        </div>
        <Question title={'최근 가장 인기있는 여성 운동화'} />
        <Question title={'비오는 날 신기 좋은 레인부츠 추천'} />
      </div>
    </>
  );
};
export default TodayChatList;
