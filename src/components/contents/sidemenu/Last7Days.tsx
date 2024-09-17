import Question from './Question';

const Last7Days = () => {
  return (
    <div>
      <div className='h-[24px] items-center text-[14px] leading-[17px]  text-[#A1A1AA] font-semibold '>지난 7일</div>
      <Question title={'여름 슬리퍼 추천'} />
      <Question title={'가벼운 러닝화'} />
      <Question title={'20대 여성이 많이 찾는 브랜드'} />
    </div>
  );
};
export default Last7Days;
