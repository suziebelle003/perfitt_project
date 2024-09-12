import FilterButton from './FilterButton';
import Button from '../common/Button';

const FilterDetail = () => {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2.5'>
          <p className='font-semibold text-[15px] leading-5'>성별</p>
          <FilterButton />
        </div>
        <Button>???개의 상품보기</Button>
      </div>
    </>
  );
};
export default FilterDetail;
