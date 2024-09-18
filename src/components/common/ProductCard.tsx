import pinkHeart from '../../assets/images/pinkheart.svg';
import shoes from '../../assets/images/shoes.svg';

type TproductProps = React.ComponentPropsWithoutRef<'span' | 'img'> & { image: string };

const ProductCard = (props: TproductProps) => {
  const { children, image, ...rest } = props;
  return (
    <>
      <article className='bg-[#F5F5F5] w-[166px] h-[156px] rounded-md px-2.5 pt-2 relative '>
        <section className=''>
          {/* 사이즈 추천,  하트 이미지*/}
          <div className='flex justify-between'>
            <div className=' bg-gradient-to-r from-[#E8F4FE] to-[#FFECFE] w-[77px] h-[20px] grid place-items-center rounded'>
              <span className=' bg-gradient-to-r from-[#12C2E9] via-[#C471ED] to-[#F64F59] text-transparent bg-clip-text text-xs font-semibold'>
                {children}
              </span>
            </div>
            <img
              src={pinkHeart}
              alt='pinkheart'
            ></img>
          </div>
          {/* 신발이미지 */}
          <div className='mx-[-18px] my-1.5'>
            <img
              className='w-[182px] h-[109px]'
              src={shoes}
              alt='shoes'
            ></img>
          </div>

          {/* 상점이미지 */}
          <img
            className='absolute bottom-[-12px] right-[6px]'
            src={image}
            alt='abcmart'
          ></img>
        </section>
      </article>
    </>
  );
};
export default ProductCard;
