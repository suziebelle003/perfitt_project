import { TChatMessage } from '../../../../types/db';
import ChatProductCard from './ChatProductCard';
import ChatBrandCard from './ChatBrandCard';
import { exportIcon, thumbsDownIcon, upArrowIcon } from '../../../../assets/icons/icons';

const ChatCardContainer = ({ products, brands }: TChatMessage) => {
  const shareChat = () => {};

  const handleDislike = () => {};

  const handlePLP = () => {};

  return (
    <div className='flex flex-col gap-[9px] mt-2.5'>
      {products && (
        <div className='flex gap-2.5 pl-11 overflow-x-scroll scrollbar-hide'>
          {products?.slice(0, 5).map((product, index) => (
            <ChatProductCard
              key={index}
              {...product}
            />
          ))}
          <button
            className='p-4 flex flex-col justify-center items-center gap-1.5'
            onClick={handlePLP}
          >
            <div className='w-[22px] h-[22px] rounded-full bg-black overflow-hidden'>
              <img
                src={upArrowIcon}
                alt='Show more'
                className='w-[15px] h-[15px] m-[3.5px] rotate-90'
              />
            </div>
            <div className='w-[29px] text-[9px] leading-[11px]'>더보기</div>
          </button>
        </div>
      )}

      {brands && (
        <div className='flex gap-2.5 px-11 overflow-x-scroll scrollbar-hide'>
          {brands?.map((brand, index) => (
            <ChatBrandCard
              key={index}
              {...brand}
            />
          ))}
        </div>
      )}

      <div className='flex gap-2.5 ml-11'>
        <button onClick={shareChat}>
          <img
            src={exportIcon}
            alt='Share chat'
          />
        </button>
        <button onClick={handleDislike}>
          <img
            src={thumbsDownIcon}
            alt='dislike'
          />
        </button>
      </div>
    </div>
  );
};

export default ChatCardContainer;
