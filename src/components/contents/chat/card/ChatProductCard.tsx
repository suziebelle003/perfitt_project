import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TProduct } from '../../../../types/db';
import { TPartner } from '../../../../types/like';
import { getPartnerBrand } from '../../../../hooks/getPartnerBrand';
import { heartFilledIcon, heartIcon } from '../../../../assets/icons/icons';
import { useAuthStore } from '../../../../stores/auth.store';
import { useProductLikeStore } from '../../../../stores/productlike.store';

const ChatProductCard = (product: TProduct) => {
  const navigate = useNavigate();
  const { uid } = useAuthStore();
  const { addProductToLikeList, removeProductFromLikeList, getProductById } = useProductLikeStore();
  const [liked, setLiked] = useState(false);
  const [partner, setPartner] = useState<TPartner>();

  useEffect(() => {
    const likedProduct = getProductById(uid, product.productId);
    setLiked(Boolean(likedProduct));

    if (product.link) {
      setPartner(getPartnerBrand(product.link));
    }
  }, [uid, product, getProductById]);

  const handleLike = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();

    if (liked) {
      removeProductFromLikeList(uid, product.productId);
      setLiked(false);
    } else {
      addProductToLikeList(uid, product);
      setLiked(true);
    }
  };

  return (
    <article
      className='w-[162px] flex-shrink-0 flex flex-col
        bg-white border border-[#F5F5F5] rounded-md overflow-hidden cursor-pointer'
      onClick={() => navigate('/bridge', { state: { product, partner } })}
    >
      <div className='relative w-full h-[152px] bg-[#F5F5F5]'>
        <img
          src={product.image}
          alt={product.modelName}
          className='w-full h-full object-cover'
        />
        <button
          className='absolute top-[13px] right-[13px] w-[19px] h-[17px]'
          onClick={handleLike}
        >
          <img
            src={liked ? heartFilledIcon : heartIcon}
            alt='like'
            className='w-full h-full object-fill'
          />
        </button>
      </div>
      <div className='relative px-2.5 pt-1.5 pb-2.5 flex flex-col gap-[5px]'>
        <div className='flex flex-col gap-[3px]'>
          <div className='text-xs/[18px] truncate'>{product.brand}</div>
          <div className='text-sm/[17px] font-semibold truncate'>{product.modelName}</div>
        </div>
        {/* <div className='text-[13px] leading-[16px] font-semibold'>{product.price}</div> */}
        <div
          className='absolute top-[-15px] right-2 w-6 h-6
            rounded-full overflow-hidden bg-white'
        >
          <img
            src={partner?.image}
            alt='like'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </article>
  );
};

export default ChatProductCard;
