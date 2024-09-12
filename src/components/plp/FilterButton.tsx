import { useState } from 'react';

const FilterButton = () => {
  const filters = ['ALL', 'WOMEN', 'MEN', 'KIDS'];
  const [select, setSelect] = useState('ALL');

  return (
    <>
      <div className='flex w-[343px] h-[32px] gap-[5px]'>
        {filters.map(filter => (
          <button
            className={`${(select === filter && 'w-max h-[32px] bg-black font-extrabold text-base text-center text-white px-3 py-1 rounded-[99px]') || 'w-max h-[32px] border border-[#E4E4E7] font-normal text-base text-center text-[#6B7280] px-3 py-1 rounded-[99px]'}`}
            onClick={() => setSelect(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </>
  );
};
export default FilterButton;
