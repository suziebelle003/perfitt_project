import { exportIcon, thumbsDown } from '../../../../../assets/images/images';
import BrandCard from './BrandCard';
import MoreButton from './MoreButton';

const dummyData = [1, 2, 3, 4, 5];

const CardContainer = () => {
  return (
    <>
      <div className='pl-7 pt-2'>
        <div className='flex gap-2 overflow-x-auto pb-3 scrollbar-hide'>
          {dummyData.map(() => (
            <BrandCard />
          ))}

          <MoreButton />
        </div>
        <div>
          <div className='flex px-0.2 gap-3 pb-3'>
            <button>
              <img
                src={exportIcon}
                alt='export-Icon'
              />
            </button>
            <button>
              <img
                src={thumbsDown}
                alt='thumbsDown'
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardContainer;
