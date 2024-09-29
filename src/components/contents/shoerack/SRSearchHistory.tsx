import { useEffect, useState } from 'react';
import { xGrayIcon } from '../../../assets/icons/icons';

function SRSearchHistory({ handleSearch }: { handleSearch: () => void }) {
  const [searchData, setSearchData] = useState<string[]>();

  useEffect(() => {
    setSearchData(['호카 고어텍스', '호카 챌린저', '스피리테인', '뉴발란스', '클로그']);
  }, []);

  const deleteAll = () => {};
  const deleteSearchData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className='mt-5'>
      <div className='flex justify-between items-center px-4'>
        <span className='text-[18px] leading-[21px] font-medium'>최근 검색어</span>
        <button
          className='text-[14px] leading-[17px] text-[#727272]'
          onClick={deleteAll}
        >
          전체삭제
        </button>
      </div>
      <div className='border-b-[6px] border-[#F5F5F5]'>
        {searchData === undefined || searchData.length === 0 ? (
          <div className='py-[31px] text-[14px] leading-[17px] text-[#A4A4A4] text-center'>최근 검색어가 없습니다.</div>
        ) : (
          <div className='mt-4'>
            {searchData?.map((data, index) => (
              <button
                key={index}
                className='relative w-full h-[42px] py-2 px-4
                border-t border-[#F5F5F5] text-[14.5px] text-left hover:bg-[#F5F5F5]'
                onClick={handleSearch}
              >
                {data}
                <button
                  className='absolute top-0 right-0 px-4 h-[42px]'
                  onClick={deleteSearchData}
                >
                  <img
                    src={xGrayIcon}
                    alt={`delete ${data}`}
                    className='w-[15px] h-[15px]'
                  />
                </button>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SRSearchHistory;
