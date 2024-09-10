import moreViewIcon from '../../assets/images/right-arrow.svg';

const SignInAuthList = () => {
  const apiPosting = [
    { brandname: 'Asics', item: '아식스 조그 100 S 화이트', price: 96000, itemImg: 'https://via.placeholder.com/48' },
    {
      brandname: 'Hoka',
      item: '호카 카하 2 로우 고어텍스 블랙',
      price: 100000,
      itemImg: 'https://via.placeholder.com/48',
    },
    {
      brandname: 'Salomon',
      item: '살로몬 XT-6 익스팬스 바바바바바바바바바바바밥',
      price: 169000,
      itemImg: 'https://via.placeholder.com/48',
    },
  ]; // api를 통해 신발추천 데이터를 받아 저장
  const moreViewShoes = () => {}; // 더보기 버튼 클릭 이벤트 함수

  return (
    <>
      <div className='w-[226px] rounded-md border-[#F5F5F5] border p-2'>
        <span className='text-[14px] mb-1 block font-semibold leading-[17px]'>맞춤 상품 추천</span>
        <div className='flex flex-col gap-[2px] mb-1'>
          {apiPosting.map((items, index) => (
            <div
              key={index}
              className='flex items-center'
            >
              <div className='w-[52px] h-[52px] rounded bg-[#F5F5F5] object-contain overflow-hidden'>
                <img
                  className='w-full h-full'
                  src={items.itemImg}
                  alt={items.item}
                />
              </div>
              <div className='flex flex-col gap-[3px] ml-[10px] text-[12px] w-full max-w-[148px]'>
                <p className='font-normal leading-[18px]'>{items.brandname}</p>
                <p className='font-semibold leading-[16px] truncate'>{items.item}</p>
                <p className='font-semibold leading-[16px]'>{items.price.toLocaleString()}원</p>
              </div>
            </div>
          ))}
        </div>
        <button className='w-[210px] h-[24px] text-xs font-medium text-[#808080] flex items-center justify-center'>
          더보기
          <img
            src={moreViewIcon}
            alt='더보기 버튼'
            className='w-[3px] h-[6px] ml-[10px]'
            onClick={moreViewShoes}
          />
        </button>
      </div>
    </>
  );
};

export default SignInAuthList;
