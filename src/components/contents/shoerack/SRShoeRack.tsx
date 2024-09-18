import SRShoeBox from './SRShoeBox';
import { TShoeInfo } from '../../../types/shoerack';
import { plusIcon, polygonIcon } from '../../../assets/images/images';

function SRShoeRack({ shoesList }: { shoesList: TShoeInfo[] }) {
  const sortShoes = () => {};

  return (
    <div className='flex flex-col gap-[5px] my-6'>
      <div className='flex justify-between items-center'>
        <span className='text-[14px] leading-[17px]'>
          총 <span className='font-semibold'>{shoesList.length}</span>개
        </span>
        <button
          className='flex gap-[6px] items-center'
          onClick={sortShoes}
        >
          <span className='text-[14px] leading-[17px] font-medium text-[#808080]'>최신순</span>
          <span>
            <img
              src={polygonIcon}
              alt='Newest First'
            />
          </span>
        </button>
      </div>
      <div className='flex flex-wrap gap-[2px]'>
        <button className='w-[113px] h-[110px] rounded-md flex justify-center items-center bg-[#E4E4E7]'>
          <img
            src={plusIcon}
            alt='Add shoes'
          />
        </button>
        {shoesList.map(shoes => (
          <SRShoeBox
            key={shoes.productId}
            className='w-[113px] h-[110px]'
            imgSrc={shoes.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SRShoeRack;
