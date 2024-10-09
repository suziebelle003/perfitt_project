import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TProduct } from '../../../../types/db';
import { getShoesRecommend } from '../../../../api/perfitt/getShoesRecommend';
import { rightArrowGrayIcon } from '../../../../assets/icons/icons';
import { getPartnerBrand } from '../../../../hooks/getPartnerBrand';

const ChatRecommendCard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<TProduct[]>();
  const [len, setLen] = useState(3);

  useEffect(() => {
    const getData = async () => {
      const data = await getShoesRecommend();
      setProducts(data);
    };
    getData();
  }, []);

  const handleClick = (product: TProduct) => {
    const partner = getPartnerBrand(product.link || '');
    navigate('/bridge', { state: { product, partner } });
  };

  return (
    products && (
      <div
        className='w-[60%] mt-2.5 mx-11 p-2 flex flex-col gap-1.5
        rounded-md border border-[#F5F5F5]'
      >
        <div className='text-[14px] font-semibold leading-[17px]'>맞춤 상품 추천</div>
        {products.slice(0, len).map(product => (
          <div
            key={product.productId}
            className='flex gap-2 cursor-pointer'
            onClick={() => handleClick(product)}
          >
            <div className='w-[52px] h-[52px] rounded bg-[#F5F5F5] overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src={product.image}
                alt={product.modelName}
              />
            </div>
            <div className='flex-1 flex flex-col gap-[3px] justify-center text-[12px] overflow-hidden'>
              <p className='font-normal leading-[18px] truncate'>{product.brand}</p>
              <p className='font-semibold leading-[16px] truncate'>{product.modelName}</p>
            </div>
          </div>
        ))}
        {products.length > len && (
          <button
            className='w-full h-6 flex gap-2.5 justify-center items-center'
            onClick={() => setLen(prev => prev + 3)}
          >
            <div className='text-xs font-medium text-[#808080]'>더보기</div>
            <img
              src={rightArrowGrayIcon}
              alt='More View Products'
              className='w-[3px] h-1.5 object-fill'
            />
          </button>
        )}
      </div>
    )
  );
};

export default ChatRecommendCard;
