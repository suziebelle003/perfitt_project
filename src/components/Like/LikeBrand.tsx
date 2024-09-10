import nike from '../../assets/images/nike.svg';
import pinkHeart from '../../assets/images/pinkheart.svg';

const LikeBrand = () => {
  return (
    <>
      <div className='flex flex-col justify-between w-[343px] h-[245px]'>
        <div className='flex flex-row w-full h-[75px] gap-x-5'>
          <img
            src={nike}
            alt='nike'
            className='flex-none'
          ></img>
          <div className='flex-1 flex-col text-base self-center'>
            <p className='font-semibold leading-5 '>NIKE</p>
            <p className='font-normal text-[#808080] leading-6'>나이키</p>
          </div>
          <img
            src={pinkHeart}
            alt='prinkheart'
            className='flex-none pr-1'
          ></img>
        </div>
        <div className='flex flex-row w-full h-[75px] gap-x-5'>
          <img
            src={nike}
            alt='nike'
            className='flex-none'
          ></img>
          <div className='flex-1 flex-col text-base self-center'>
            <p className='font-semibold leading-5 '>NIKE</p>
            <p className='font-normal text-[#808080] leading-6'>나이키</p>
          </div>
          <img
            src={pinkHeart}
            alt='prinkheart'
            className='flex-none pr-1'
          ></img>
        </div>
        <div className='flex flex-row w-full h-[75px] gap-x-5'>
          <img
            src={nike}
            alt='nike'
            className='flex-none'
          ></img>
          <div className='flex-1 flex-col text-base self-center'>
            <p className='font-semibold leading-5 '>NIKE</p>
            <p className='font-normal text-[#808080] leading-6'>나이키</p>
          </div>
          <img
            src={pinkHeart}
            alt='prinkheart'
            className='flex-none pr-1'
          ></img>
        </div>
      </div>
    </>
  );
};
export default LikeBrand;
