import ProductCard from '../common/ProductCard';

const LikeItems = () => {
  return (
    <>
      <ProductCard />
      <article className=' w-[166px] h-[89px] font-[pretender] text-[12.5px]'>
        <section className='flex flex-col'>
          <div className='leading-2.5 w-[166px] h-[89px]  px-1.5 py-2.5 gap-2.5'>
            <p className='mb-[3px]'>Hoka</p>
            <p className='mb-[10px] font-semibold  whitespace-nowrap'>호카 카하2 로우 고어텍스</p>
            <p className='m-0 font-semibold'>100,000원</p>
          </div>
          {/* 이 신발 더 알아보기 버튼 */}
          <button className='flex flex-row items-center gap-1.5 w-[166px] h-[32px] border rounded-md font-semibold px-[25.5px] text-[10px] leading-4  whitespace-nowrap'>
            <img
              className='w-[16px] h-[16px]'
              src='airecomend.svg'
            ></img>
            이 신발 더 알아보기
          </button>
        </section>
      </article>
      {/* <ProductCard /> */}
    </>
  );
};
export default LikeItems;
