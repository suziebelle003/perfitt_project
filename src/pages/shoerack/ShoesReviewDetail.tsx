// 신발 상세 페이지

// 더보기 메뉴 추가
// 로그인 안 했을 때 로그인 link
// productId 없이 접근했을 때

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import SRShoeBox from '../../components/contents/shoerack/SRShoeBox';
import { TShoeData, TShoeInfo } from '../../types/shoerack';
import { starFillIcon } from '../../assets/images/images';

function ShoesReviewDetail() {
  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id');
  // if (productId === null || '') navigate(-1);

  const [shoeInfo, setShoeInfo] = useState<TShoeInfo>();
  const [shoeData, setShoeData] = useState<TShoeData>();

  useEffect(() => {
    setShoeInfo({
      productId: productId !== null ? productId : '1010087307',
      image: 'https://image.a-rt.com/art/product/2022/01/60008_1642143249212.jpg?shrink=580:580',
      brand: 'NIKE',
      modelName: 'W NIKE COURT VISION ALTA LTR',
    });
    setShoeData({
      star: 3,
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
    { label: '신발 길이', value: shoeData?.length },
    { label: '발볼 너비', value: shoeData?.width },
    { label: '발등 높이', value: shoeData?.height },
    { label: '밑창', value: shoeData?.cushion },
    { label: '무게', value: shoeData?.weight },
    { label: '사이즈 추천', value: shoeData?.size },
  ];

  return (
    <>
      <Header
        title='신발 등록'
        leftBtn='back'
      />
      <div className='p-4 pt-14'>
        {/* 기본 정보 */}
        <SRShoeBox
          className='w-full h-[343px] mt-1.5 mb-5'
          imgSrc={shoeInfo?.image}
        />
        <div className='flex space-x-5 items-center'>
          <div className='w-[59px] flex space-x-0.5 justify-end items-center'>
            <img
              src={starFillIcon}
              alt='star'
              className='w-[25px] h-[25px]'
            />
            <span className='text-[24px] leading-9 font-semibold'>{shoeData?.star}</span>
          </div>
          <div className='max-w-[264px] flex flex-col space-y-0.5'>
            <div className='text-[13px] leading-[15px] text-[#808080]'>{shoeInfo?.brand}</div>
            <div className='text-[15px] leading-[15px] truncate'>{shoeInfo?.modelName}</div>
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
            <div>{shoeData?.review}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoesReviewDetail;
