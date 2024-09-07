import Button from '../../../../common/Button';
import KeyWordButton from './KeyWordButton';

const keywords = [
  '스니커즈',
  '트레킹',
  '운동',
  '산책',
  '여행',
  '운동화',
  '구두',
  '등산화',
  '샌들',
  '레인부츠',
  '슬리퍼',
];

const KeyWordSelector = () => {
  return (
    <>
      <div className='w-full flex flex-col gap-4 px-4 py-3 bg-white rounded-t-3xl border shadow-shadow-top'>
        <div className='flex items-center justify-center p-3.5 gap-1 '>
          <span className='font-semibold text-lg '>관심 키워드</span>
        </div>

        <div className='flex flex-wrap gap-2'>
          {keywords.map((keywords, index) => (
            <KeyWordButton
              key={index}
              text={keywords}
            />
          ))}
        </div>

        <div className='flex justify-center pt-4 pb-3 px-1'>
          <Button className=''>n개 선택 완료</Button>
        </div>
      </div>
    </>
  );
};

export default KeyWordSelector;
