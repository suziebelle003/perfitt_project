import { useEffect, useState } from 'react';
import { starFillIcon } from '../assets/images/images';
import SRShoeBox from '../components/contents/SRShoeBox';

function ShoesDetail() {
  const [shoeData, setShoeData] = useState({
    length: '',
    width: '',
    height: '',
    cushion: '',
    weight: '',
    size: '',
    review: '',
  });

  useEffect(() => {
    setShoeData({
      length: '잘 맞아요',
      width: '좁아요',
      height: '적당해요',
      cushion: '푹신해요',
      weight: '가벼워요',
      size: '정사이즈',
      review: '등산할 때 신으려고 구매했는데 푹신해서 마음에 들어요. 발이 불편하지 않고 통기성이 좋았어요.',
    });
  }, []);

  const shoeDataList = [
    { label: '신발 길이', value: shoeData.length },
    { label: '발볼 너비', value: shoeData.width },
    { label: '발등 높이', value: shoeData.height },
    { label: '밑창', value: shoeData.cushion },
    { label: '무게', value: shoeData.weight },
    { label: '사이즈 추천', value: shoeData.size },
  ];

  return (
    <>
      {/* 기본 정보 */}
      <SRShoeBox className='w-full h-[343px] mt-1.5 mb-5' />
      <div className='flex space-x-5 items-center'>
        <div className='w-[59px] flex space-x-0.5 justify-end items-center'>
          <img
            src={starFillIcon}
            alt='star'
            className='w-[25px] h-[25px]'
          />
          <span className='text-[24px] leading-9 font-semibold'>4</span>
        </div>
        <div className='max-w-[264px] flex flex-col space-y-0.5'>
          <div className='text-[13px] leading-[15px] text-[#808080]'>Brand</div>
          <div className='text-[15px] leading-[15px] truncate'>신발 이름 가나다 어쩌구 저쩌구 12345 name</div>
        </div>
      </div>

      {/* 후기 */}
      <div className='py-[15px] text-[15px] leading-6'>
        <ul className='mb-3'>
          {shoeDataList.map((list, index) => (
            <li
              key={index}
              className='w-full px-4 py-2'
            >
              <span className='inline-block w-[100px] mr-10 text-[#4B5563]'>{list.label}</span>
              <span>{list.value}</span>
            </li>
          ))}
        </ul>
        <div className='pl-4 py-2'>
          <div className='mb-2.5 text-[#4B5563]'>리뷰</div>
          <div>{shoeData.review}</div>
        </div>
      </div>
    </>
  );
}

export default ShoesDetail;
