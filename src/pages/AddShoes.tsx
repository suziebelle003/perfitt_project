import { useState } from 'react';
import { plusIcon, starFillIcon, starIcon } from '../assets/images/images';
import Button from '../components/common/Button';
import SRShoeInfo from '../components/contents/SRShoeInfo';
import SROptionSelector from '../components/contents/SROptionSelector';
import { twMerge } from 'tailwind-merge';

function AddShoes() {
  const [starHover, setStarHover] = useState(0);
  const [starRating, setStarRating] = useState(0);
  const [shoeData, setShoeData] = useState({
    length: '',
    width: '',
    height: '',
    cushion: '',
    weight: '',
    size: '',
  });

  const questions = [
    {
      id: 'length',
      title: '신발 길이가 잘 맞나요?',
      options: ['짧아요', '잘 맞아요', '길어요'],
    },
    {
      id: 'width',
      title: '발볼 너비가 잘 맞나요?',
      options: ['좁아요', '잘 맞아요', '넓어요'],
    },
    {
      id: 'height',
      title: '발등 높이는 어떤가요?',
      options: ['타이트해요', '적당해요', '넉넉해요'],
    },
    {
      id: 'cushion',
      title: '밑창은 푹신한가요?',
      options: ['딱딱해요', '적당해요', '푹신해요'],
    },
    {
      id: 'weight',
      title: '신발 무게는 어떤가요?',
      options: ['가벼워요', '적당해요', '무거워요'],
    },
  ];

  const handleOptionSelect = (id: string, value: string) => {
    setShoeData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const sizeOptions = ['많이 작아요', '약간 작아요', '정사이즈', '약간 커요', '많이 커요'];

  return (
    <div className='h-full flex flex-col'>
      <div className='flex-1 mb-6 overflow-y-scroll scrollbar-hide'>
        {/* 신발 선택 */}
        <div className='mt-[5px] py-[1px]'>
          <div className='flex flex-col gap-[11px]'>
            <div className='text-[15px] leading-[18px] font-semibold text-[#27272A]'>신발을 선택해 주세요</div>
            <button className='h-12 bg-[#F5F5F5] rounded-md flex justify-center items-center'>
              <img
                src={plusIcon}
                alt='Search Shoes'
              />
            </button>
          </div>
          {/* <SRShoeInfo /> */}
        </div>

        <div className='flex flex-col gap-[10px] my-5 py-5'>
          {/* 별점 선택 */}
          <div className='flex flex-col gap-[6px]'>
            <div className='text-[18px] leading-[30px] font-semibold tracking-[-0.02em] text-center'>
              신발은 마음에 드셨나요?
            </div>
            <div className='text-[12px] leading-[18px] text-center'>별점을 눌러 만족도를 알려주세요.</div>
          </div>
          <div className='flex justify-center'>
            {[1, 2, 3, 4, 5].map(star => (
              <img
                key={star}
                src={star <= (starHover || starRating) ? starFillIcon : starIcon}
                alt={`star${star}`}
                className='w-9 h-9 cursor-pointer'
                onClick={() => setStarRating(star)}
                onMouseEnter={() => setStarHover(star)}
                onMouseLeave={() => setStarHover(0)}
              />
            ))}
          </div>
        </div>
        {/* 후기 선택 */}
        <div className='flex flex-col gap-5'>
          {questions.map(question => (
            <SROptionSelector
              key={question.id}
              title={question.title}
              options={question.options}
              selectedValue={shoeData[question.id as keyof typeof shoeData]}
              onSelect={value => handleOptionSelect(question.id, value)}
            />
          ))}

          {/* 사이즈감 선택 */}
          <div className='flex flex-col gap-[15px]'>
            <div className='text-[15px] leading-5 font-semibold'>이 신발의 사이즈감은 어떠신가요?</div>
            <div className='flex flex-col gap-[9px]'>
              <div className='relative'>
                <div className='absolute w-full h-[18px] flex items-center'>
                  <hr className='w-full border-4 border-[#E4E4E7]' />
                </div>
                <div className='relative w-full h-[15px] flex justify-between items-center px-3'>
                  {sizeOptions.map((option, index) => (
                    <div
                      key={index}
                      className='relative'
                    >
                      <button
                        onClick={() => handleOptionSelect('size', option)}
                        className='w-3 h-3 border-2 border-[#D4D4D8] rounded-full bg-white'
                      />
                      {shoeData.size === option && (
                        <button
                          className='absolute top-[4px] left-[-7px] w-[26px] h-[18px]
                          border-[3px] border-[#3F3F46] rounded-[99px] bg-black'
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex justify-between'>
                {sizeOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect('size', option)}
                    className={twMerge(
                      'flex-1 mt-[-24px] pt-6 text-[12px] leading-4 font-semibold z-10',
                      `${shoeData.size === option ? 'text-black' : 'text-[#A1A1AA]'}`,
                      index === 0 ? 'text-left' : index === sizeOptions.length - 1 ? 'text-right' : 'text-center'
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='text-[15px] leading-7 font-semibold tracking-[-0.01em]'>자세한 사용기를 적어주세요.</div>
            <textarea
              className='w-[343px] h-[200px] p-4 border border-[#E4E4E7] resize-none text-[15px] leading-6'
              placeholder='이 신발을 신으면서 느꼈던 장점 및 단점을 솔직하게 알려주세요.'
            />
          </div>
        </div>
      </div>

      {/* 등록/수정 버튼 */}
      <Button>신발 등록하기</Button>
    </div>
  );
}

export default AddShoes;
