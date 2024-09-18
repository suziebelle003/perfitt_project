import Button from '../../common/Button';
import FilterButton from '../../common/FilterButton';

const FilterDetail = () => {
  const filters = ['ALL', 'WOMEN', 'MEN', 'KIDS'];
  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-2.5'>
          <p className='font-semibold text-[15px] leading-5'>성별</p>
          <FilterButton arr={filters} />
        </div>
        <Button>???개의 상품보기</Button>
      </div>
    </>
  );
};
export default FilterDetail;
