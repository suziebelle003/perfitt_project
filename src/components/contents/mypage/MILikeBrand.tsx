import { useEffect, useState } from 'react';
import { TBrand } from '../../../types/db';
import { heartFilledIcon } from '../../../assets/icons/icons';

const MILikeBrand = () => {
  const [brands, setBrands] = useState<TBrand[]>();

  useEffect(() => {
    setBrands([
      {
        brandId: '1',
        nameEn: 'NICK',
        nameKor: '나이키',
        image: 'https://via.placeholder.com/75',
      },
      {
        brandId: '2',
        nameEn: 'ADIDAS',
        nameKor: '아디다스',
        image: 'https://via.placeholder.com/75',
      },
    ]);
  });

  const handleLike = () => {};

  return (
    <>
      <div className='text-sm/[22px] font-extrabold mb-[15px]'>총 {brands?.length}개</div>
      <div className='pb-5 flex flex-wrap gap-[11px] overflow-scroll scrollbar-hide'>
        {brands?.map(brand => (
          <div
            key={brand.brandId}
            className='w-full h-[75px] flex items-center gap-5'
          >
            <div className='w-[75px] h-[75px] rounded-full overflow-hidden'>
              <img
                src={brand.image}
                alt={brand.nameEn}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex-1 flex flex-col gap-1.5'>
              <p className='text-base/[20px] font-semibold'>{brand.nameEn}</p>
              <p className='text-base text-[#808080]'>{brand.nameKor}</p>
            </div>
            <button
              className='w-[15px] h-[14px] mr-1'
              onClick={handleLike}
            >
              <img
                src={heartFilledIcon}
                alt='Like brand'
                className='w-full h-full object-fill'
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default MILikeBrand;
