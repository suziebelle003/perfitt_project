import pinkHeart from '../../../assets/images/pinkheart.svg';
import { IProductCardProps } from '../../../types/like';
import nike from '../../../assets/images/nike.svg';
import adidas from '../../../assets/images/adidas.svg';
import crocss from '../../../assets/images/crocss2.svg';
const LikeBrand = ({ product }: IProductCardProps) => {
  return (
    <>
      <div className='flex flex-col justify-between mb-2.5'>
        <div className='flex flex-row w-full h-[75px] gap-x-5'>
          {(function () {
            if (product.brand == 'NIKE')
              return (
                <img
                  src={nike}
                  alt='nike'
                  className='flex-none'
                ></img>
              );
            if (product.brand == 'ASICS')
              return (
                <img
                  src={adidas}
                  alt='nike'
                  className='flex-none'
                ></img>
              );
            if (product.brand == 'SALOMON')
              return (
                <img
                  src={nike}
                  alt='nike'
                  className='flex-none'
                ></img>
              );
            if (product.brand == 'HOKA')
              return (
                <img
                  src={crocss}
                  alt='nike'
                  className='flex-none'
                ></img>
              );
          })()}

          <div className='flex-1 flex-col text-base self-center space-y-1.5 '>
            <p className='font-semibold leading-5 '>{product.brand}</p>
            <p className='font-normal text-[#808080] leading-6'>{product.brand}</p>
          </div>
          <img
            src={pinkHeart}
            alt='pinkheart'
            className='flex-none pr-1'
          ></img>
        </div>
      </div>
    </>
  );
};
export default LikeBrand;
