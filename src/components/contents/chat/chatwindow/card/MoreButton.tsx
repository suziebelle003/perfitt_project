import { rightArrowLong } from '../../../../../assets/images/images';
import Button from '../../../../common/Button';

const MoreButton = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col gap-1.5 pl-2 pr-1'>
        <Button className='flex items-center justify-center rounded-full w-[22px] h-[22px]'>
          <img src={rightArrowLong} />
        </Button>
        <div className='text-[9px] font-normal text-center whitespace-nowrap'>
          <span>더보기</span>
        </div>
      </div>
    </>
  );
};
export default MoreButton;
