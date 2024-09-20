import { useEffect, useState } from 'react';
import moreViewIcon from '../../../assets/images/right-arrow-short.svg';
import { getRecomendListApi } from '../../../api/signin/getRecomendListApi';

const SignInAuthList = () => {
  const [apiPosting, setApiPosting] = useState<
    { image: string; link: string; modelName: string; brand: string; modelNo: string; productId: string }[] | null
  >(null);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false); // 더보기 상태 관리

  useEffect(() => {
    const getData = async () => {
      const result = await getRecomendListApi();
      if (result.error) {
        setError(result.error);
        setApiPosting(null); // 에러 발생 시 상태를 null로 설정
      } else {
        setApiPosting(result.data);
      }
    };

    getData();
  }, []);

  // 더보기 버튼 클릭 시 전체 목록을 보여줌
  const handleMoreView = () => {
    setShowAll(prev => !prev);
  };

  // 보여줄 항목을 제한하거나 전체 보여줌
  const itemsToShow = showAll ? apiPosting : apiPosting?.slice(0, 3);

  return (
    <>
      <div className='w-[226px] rounded-md border-[#F5F5F5] border p-2'>
        <div className='text-[14px] font-semibold leading-[17px]'>맞춤 상품 추천</div>
        <div className='flex flex-col gap-1.5 my-1.5'>
          {error && <p className='text-red-500'>{error}</p>}
          {apiPosting ? (
            itemsToShow?.map(item => (
              <a
                key={item.productId}
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center hover:bg-gray-50'
              >
                <div className='w-[52px] h-[52px] rounded bg-[#F5F5F5] overflow-hidden'>
                  <img
                    className='w-full h-full object-cover'
                    src={item.image}
                    alt={item.modelName}
                  />
                </div>
                <div className='flex flex-col gap-[3px] ml-[10px] text-[12px] w-full max-w-[148px]'>
                  <p className='font-normal leading-[18px]'>{item.brand}</p>
                  <p className='font-semibold leading-[16px] truncate'>{item.modelName}</p>
                </div>
              </a>
            ))
          ) : (
            <p>추천 상품을 불러오는 중입니다...</p>
          )}
        </div>
        {apiPosting && apiPosting.length > 3 && (
          <button
            className='w-[210px] h-[24px] text-xs font-medium text-[#808080] flex items-center justify-center'
            onClick={handleMoreView}
          >
            {showAll ? '닫기' : '더보기'}
            <img
              src={moreViewIcon}
              alt='더보기 버튼'
              className='w-[3px] h-[6px] ml-[10px]'
            />
          </button>
        )}
      </div>
    </>
  );
};

export default SignInAuthList;
