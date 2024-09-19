// 신발 검색(text) 페이지

// 로그인 안 했을 때?
// 검색 이미지 버튼 onClick?
// 이미지 검색 link
// 검색 결과 없을 때
// 최근 검색어 몇 개?
// 무한 스크롤?

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import SRSearchHistory from '../../components/contents/shoerack/SRSearchHistory';
import SRShoeInfo from '../../components/contents/shoerack/SRShoeInfo';
import Button from '../../components/common/Button';
import { TShoeInfo } from '../../types/shoerack';
import { cameraIcon, searchIcon } from '../../assets/images/images';

function ShoesSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [shoeData, setShoeData] = useState<TShoeInfo[]>();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setShoeData([
      {
        productId: '1010087307',
        modelName: 'W NIKE COURT VISION ALTA LTR',
        brand: 'NIKE',
        image: 'https://image.a-rt.com/art/product/2022/01/60008_1642143249212.jpg?shrink=580:580',
      },
      {
        productId: '1020108507',
        modelName: '조그 100 2 맨 엑스트라 와이드',
        brand: 'ASICS',
        image: 'https://image.a-rt.com/art/product/2024/07/08615_1721974809586.jpg?shrink=580:580',
      },
      {
        productId: '8209459151000',
        modelName: 'SALOMON X Ultra 4 Mid GTX',
        brand: 'SALOMON',
        image: 'https://perfittdemo.myshopify.com/cdn/shop/files/Untitled_12.png?v=1715936706&width=1946',
      },
    ]);
  }, []);

  const handleSearch = () => {};

  return (
    <div className='flex flex-col h-full'>
      <Header
        title='신발 검색'
        back
      />
      <div className='p-4 pt-0 mt-[5px]'>
        {/* 검색창 */}
        <div
          className='flex justify-between items-center w-full h-10 pl-4 pr-5
          border border-[#E4E4E7] rounded-full'
        >
          <img
            src={searchIcon}
            alt='search'
            className='w-[15px] h-[15px]'
          />
          <input
            className='flex-1 m-[11px] h-9 text-[15px] placeholder-[#D4D4D8] focus:outline-none'
            type='text'
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder='신발이름, 모델명 겸색'
          />
          <button>
            <img
              src={cameraIcon}
              alt='image search'
              className='w-[18px] h-[17px]'
            />
          </button>
        </div>
      </div>

      {/* 최근 검색어 / 검색 리스트 */}
      {shoeData === undefined || shoeData.length === 0 ? (
        <SRSearchHistory handleSearch={handleSearch} />
      ) : (
        <div className='p-4 pt-5 flex-1 flex flex-col'>
          <div className='flex-1 mb-4 flex flex-col gap-2.5'>
            {shoeData?.map(shoe => (
              <div
                className={`border hover:border-black rounded cursor-pointer
                  ${selected === shoe.productId ? 'border-black' : 'border-white'}`}
                onClick={() => setSelected(prev => (prev === shoe.productId ? '' : shoe.productId))}
              >
                <SRShoeInfo
                  key={shoe.productId}
                  {...shoe}
                />
              </div>
            ))}
          </div>
          {selected !== '' && (
            <Button onClick={() => navigate(`/shoe-rack/review/add?id=${selected}`)}>선택 완료</Button>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoesSearch;
