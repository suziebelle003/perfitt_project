import { useNavigate } from 'react-router-dom';
import pinkHeart from '../../assets/images/pinkheart.svg';
import heart from '../../assets/images/heart.svg';
import aiRecomend from '../../assets/images/airecomend.svg';
import { IProductCardProps } from '../../types/like';
import { useEffect, useState } from 'react';
import { getPartnerBrand } from '../../hooks/getPartnerBrand';

type TPartner = {
  name: string;
  image: string;
};

const ProductCard = ({ product }: IProductCardProps) => {
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState(true);
  const [partner, setPartner] = useState<TPartner>();

  useEffect(() => {
    setPartner(getPartnerBrand(product.link));
  }, []);

  const handleNavigation = () => {
    navigate('/bridge', { state: { product, partner } });
  };

  return (
    <>
      <div className='w-[166px] h-full mb-2.5 '>
        <article className='bg-[#F5F5F5] w-[166px] h-[156px] rounded-md px-2.5 pt-2 relative '>
          <section className=''>
            {/* 사이즈 추천,  하트 이미지*/}
            <div className='flex justify-between'>
              <div className=' bg-gradient-to-r from-[#E8F4FE] to-[#FFECFE] w-[77px] h-[20px] grid place-items-center rounded'>
                <span className=' bg-gradient-to-r from-[#12C2E9] via-[#C471ED] to-[#F64F59] text-transparent bg-clip-text text-xs font-semibold'>
                  240mm 추천
                </span>
              </div>
              {!isLike ? (
                <img
                  src={heart}
                  alt='heart'
                  onClick={() => setIsLike(true)}
                ></img>
              ) : (
                <img
                  className='animate-dropIn'
                  src={pinkHeart}
                  alt='pinkheart'
                  onClick={() => setIsLike(false)}
                ></img>
              )}
            </div>
            {/* 신발이미지 */}
            <button onClick={handleNavigation}>
              <div>
                <img
                  className='w-full h-[109px] '
                  src={product.image}
                  alt='shoes'
                ></img>
              </div>
            </button>
            <img
              className='absolute bottom-[-12px] right-[6px]'
              src={partner?.image}
              alt={partner?.name}
              width='24px'
              height='24px'
            ></img>
          </section>
        </article>
        <article className=' w-[166px] text-sm'>
          <section className='flex flex-col'>
            <div className='leading-2.5 w-[166px] px-1.5 py-2.5 gap-2.5'>
              <p className='mb-[3px]'>{product.brand}</p>
              <p className='mb-[10px] overflow-hidden font-semibold text-ellipsis whitespace-nowrap break-words'>
                {product.modelName}
              </p>
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
export default ProductCard;
