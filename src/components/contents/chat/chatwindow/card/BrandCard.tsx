import { brand, rightArrowShort } from '../../../../../assets/images/images';

const BrandCard = () => {
  return (
    <>
      <div className='border border-[#E4E4E7] rounded-md flex flex-col items-center w-fit cursor-pointer'>
        <div className='flex items-center justify-center w-[110px] h-[103px] rounded-t-md'>
          <img
            src={brand}
            alt='brand'
          />
        </div>
        <div className='flex justify-center items-center relative w-full h-[29px] text-center border-t border-[#E4E4E7]'>
          <button className='flex items-center font-medium text-[#71717A] text-[10px]'>
            전체 상품 보기
            <img
              className='absolute right-4'
              src={rightArrowShort}
              alt='rightArrow'
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default BrandCard;
