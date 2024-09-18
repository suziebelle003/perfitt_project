import { Link } from 'react-router-dom';
import { abcMart, pinkHeart } from '../../../../../assets/images/images';
import { IProductItemProps } from '../../../../../types/chat';

const ProductItem = ({ product }: IProductItemProps) => {
  return (
    <>
      <article className='bg-[#F5F5F5] w-[150px] rounded-md relative border border-[#F5F5F5]'>
        {/* 사이즈 추천,  하트 이미지*/}
        <div className='flex justify-between'>
          <img
            src={pinkHeart}
            alt='pinkheart'
            className='w-4 h-4 absolute top-2 right-2'
          />
        </div>
        {/* 신발이미지 */}
        <Link to={product.link}>
          <div className='flex justify-center items-center '>
            <img
              className='w-full h-[130px] rounded-md'
              src={product.image}
              alt={product.modelName}
            />
          </div>
          <div className='bg-white leading-[17px] w-full  px-3.5 py-2.5 gap-2.5 rounded-b-md'>
            <p className='text-[12px]'>{product.brand}</p>
            <p className='truncate text-sm font-semibold'>{product.modelName}</p>
          </div>
        </Link>
        {/* 상점이미지 */}
        <img
          className='absolute top-[120px] right-[6px]'
          src={abcMart}
          alt='abcmart'
        />
      </article>
    </>
  );
};

export default ProductItem;
