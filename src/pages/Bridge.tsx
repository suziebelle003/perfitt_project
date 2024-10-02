// Bridge 페이지

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Bridge() {
  const location = useLocation();
  const { product, partner } = location.state;

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = product.link;
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <div className='w-[120px] h-[120px] rounded-full overflow-hidden'>
        <img
          src={partner.image}
          alt={partner.name}
          className='w-full h-full object-contain'
        />
      </div>

      <div className='mt-[38px] flex flex-col gap-4 text-center'>
        <div className='text-[18px] leading-7 tracking-[-0.015em]'>
          [{product.brand}] {product.modelName}
        </div>
        <div className='text-[18px] leading-6 font-semibold tracking-[-0.015em]'>
          {partner.name !== 'Perfitt' && (
            <>
              {partner.name}(으)로
              <br />
            </>
          )}
          이동 중입니다.
        </div>
        <div className='text-[16px] leading-6 text-[#808080]'>잠시만 기다려 주세요.</div>
      </div>
    </div>
  );
}

export default Bridge;
