import aiRecomend from '../../assets/images/airecomend.svg';
import ProductCard from '../common/ProductCard';
import abcMart from '../../assets/images/abcmart.svg';
type TItemProps = React.ComponentPropsWithoutRef<'p' | 'img'> & { brand: string; shoesImage: string };

const LikeItems = (props: TItemProps) => {
  const { children, brand, shoesImage, ...rest } = props;

  return (
    <>
      <div className='w-[166px] h-full mb-2.5 '>
        <ProductCard
          image={abcMart}
          shoesImage={shoesImage}
        >
          240mm 추천
        </ProductCard>
        <article className=' w-[166px] text-sm'>
          <section className='flex flex-col'>
            <div className='leading-2.5 w-[166px] px-1.5 py-2.5 gap-2.5'>
              <p
                {...rest}
                className='mb-[3px]'
              >
                {brand}
              </p>
              <p className='mb-[10px] font-semibold'>{children}</p>
              <p className='m-0 font-semibold'>100,000원</p>
            </div>
            {/* 이 신발 더 알아보기 버튼 */}
            <button className='flex flex-row items-center gap-1.5 w-[166px] h-[32px] border rounded-md font-semibold px-[33.5px] text-[10px] leading-4 whitespace-nowrap'>
              <img
                className='w-[16px] h-[16px]'
                src={aiRecomend}
                alt='airecomend'
              ></img>
              이 신발 더 알아보기
            </button>
          </section>
        </article>
      </div>
    </>
  );
};
export default LikeItems;
