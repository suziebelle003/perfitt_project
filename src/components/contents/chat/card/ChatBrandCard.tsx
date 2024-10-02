import { TBrand } from '../../../../types/db';
import { rightArrowGrayIcon } from '../../../../assets/icons/icons';

const ChatBrandCard = (brand: TBrand) => {
  return (
    <article className='w-[110px] flex-shrink-0 bg-white border border-[#E4E4E7] rounded-md'>
      <img
        src={brand.thumbnail}
        alt={brand.brand}
        className='w-full h-[103px] p-2 object-contain'
      />
      <button
        className='py-[8.5px] px-[17.5px] flex justify-between items-center
          border-t border-t-[#E4E4E7]'
      >
        <div className='w-[69px] text-[10px] leading-[12px] text-center'>전체 상품 보기</div>
        <img
          src={rightArrowGrayIcon}
          alt='View all products'
          className='w-[3px] h-1.5 object-fill'
        />
      </button>
    </article>
  );
};

export default ChatBrandCard;
