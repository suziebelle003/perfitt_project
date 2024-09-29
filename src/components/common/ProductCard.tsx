import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TLikeProduct, TPartner } from '../../types/like';
import { getPartnerBrand } from '../../hooks/getPartnerBrand';
import { aiBalloonIcon, heartFilledIcon, heartIcon } from '../../assets/icons/icons';

const ProductCard = ({ product }: { product: TLikeProduct }) => {
  const navigate = useNavigate();
  const [partner, setPartner] = useState<TPartner>();

  useEffect(() => {
    if (product.link) setPartner(getPartnerBrand(product.link));
  }, []);

  const handleLike = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
  };

  const moreShoesAI = () => {};

  return (
    <article className='w-[166px] bg-white'>
      <div
        className='cursor-pointer'
        onClick={() => navigate('/bridge', { state: { product, partner } })}
      >
        {/* image */}
        <div className='relative w-[166px] h-[156px] rounded-md bg-[#F5F5F5] overflow-hidden'>
          <img
            src={product.image}
            alt={product.modelName}
            className='w-full h-full object-cover'
          />
          <div
            className='absolute top-2 left-2.5 py-0.5 px-[5px] rounded
            bg-gradient-to-r from-[#E8F4FE] to-[#FFECFE]'
          >
            <div
              className='text-xs font-semibold text-transparent bg-clip-text
              bg-gradient-to-r from-[#12C2E9] via-[#C471ED] to-[#F64F59]'
            >
              240mm 추천
            </div>
          </div>
          <button
            className='absolute top-[11px] right-2.5 w-[15px] h-[14px]'
            onClick={handleLike}
          >
            <img
              src={product.like ? heartFilledIcon : heartIcon}
              alt='like'
              className='w-full h-full object-fill'
            />
          </button>
        </div>

        {/* info */}
        <div className='relative py-2.5 px-1.5'>
          <div className='flex flex-col gap-[3px]'>
            <div className='text-sm/[22px] truncate'>{product.brand}</div>
            <div className='text-sm/[17px] font-semibold truncate'>{product.modelName}</div>
          </div>
          {/* <div className='mt-2.5 text-sm/[17px] font-semibold'>{product.price}</div> */}
          <div
            className='absolute top-[-12px] right-1.5 w-5 h-5
              rounded-full overflow-hidden bg-white'
          >
            <img
              src={partner?.image}
              alt='like'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      {/* ai btn */}
      <button
        className='w-full h-[32px] flex justify-center items-center gap-1.5
          rounded-md border-[0.6px] border-[#E4E4E7]'
        onClick={moreShoesAI}
      >
        <img
          src={aiBalloonIcon}
          alt='AI learn more'
        />
        <div className='text-[10px] font-semibold'>이 신발 더 알아보기</div>
      </button>
    </article>
  );
};
export default ProductCard;
