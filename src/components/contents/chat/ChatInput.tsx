import Button from '../../common/Button';
import { galleryIcon } from '../../../assets/images/images';

const ChatInput = () => {
  return (
    <>
      <div className='bg-[rgb(245,245,245)] w-full h-[104px]'>
        <div className='flex flex-row items-center pt-4 px-4'>
          <div className=' w-10'>
            <img
              src={galleryIcon}
              alt='gallery-icon'
            />
          </div>

          <div className='relative flex flex-row w-full pl-3'>
            <input
              className='w-full h-[48px] text-base rounded-full border border-[#E4E4E7] pl-4 pr-12 placeholder:text-[#71717A] '
              type='text'
              placeholder='궁금한 신발 정보 물어보세요!'
            />

            <Button className='flex items-center justify-center rounded-full w-10 h-10 absolute right-1 top-1/2 transform -translate-y-1/2 '>
              ↑
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInput;
