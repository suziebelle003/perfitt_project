import pinkHeart from '../../assets/images/pinkheart.svg';
type TBrandProps = React.ComponentPropsWithoutRef<'p' | 'img'> & { image: string; brand: string };
const LikeBrand = (props: TBrandProps) => {
  const { image, children, brand, ...rest } = props;
  return (
    <>
      <div className='flex flex-col justify-between w-[343px] h-[245px]'>
        <div className='flex flex-row w-full h-[75px] gap-x-5'>
          <img
            src={image}
            alt='nike'
            className='flex-none'
          ></img>
          <div className='flex-1 flex-col text-base self-center'>
            <p
              {...rest}
              className='font-semibold leading-5 '
            >
              {brand}
            </p>
            <p className='font-normal text-[#808080] leading-6'>{children}</p>
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
