import { useState } from 'react';
import MILikeProduct from './MILikeProduct';
import MILikeBrand from './MILikeBrand';

function MILike() {
  const [toggleMenu, setToggleMenu] = useState<'product' | 'brand'>('product');

  return (
    <div className='h-full flex flex-col'>
      <div className='flex flex-row gap-[5px] mb-[17px]'>
        <button
          className={`py-1 px-3 text-base rounded-[99px] border
            ${toggleMenu === 'product' ? 'font-extrabold text-white border-black bg-black' : 'border-[#E4E4E7] text-[#4B5563]'}`}
          onClick={() => setToggleMenu('product')}
        >
          상품
        </button>
        <button
          className={`py-1 px-3 text-base rounded-[99px] border
            ${toggleMenu === 'brand' ? 'font-extrabold text-white border-black bg-black' : 'border-[#E4E4E7] text-[#4B5563]'}`}
          onClick={() => setToggleMenu('brand')}
        >
          브랜드
        </button>
      </div>
      <div className='flex-1 overflow-auto'>
        <div className='h-full flex flex-col'>{toggleMenu === 'product' ? <MILikeProduct /> : <MILikeBrand />}</div>
      </div>
    </div>
  );
}

export default MILike;
