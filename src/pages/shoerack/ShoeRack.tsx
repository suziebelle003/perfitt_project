// 신발장 메인 페이지

// 뒤로가기
// 로그인 안 했을 때 로그인 link
// userInfo type?
// 정렬 컴포넌트 분리
// 신발 등록 버튼 link (2개)
// 무한 스크롤?

import { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import SREmpty from '../../components/contents/shoerack/SREmpty';
import SRShoeRack from '../../components/contents/shoerack/SRShoeRack';
import { plusCircleIcon, userIcon } from '../../assets/images/images';
import { TShoeInfo } from '../../types/shoerack';

function ShoeRack() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    size: '',
  });
  const [shoesList, setShoesList] = useState<TShoeInfo[]>();

  console.log('shoesList', shoesList);

  useEffect(() => {
    setUserInfo({
      name: '김이름',
      size: '240mm',
    });
    setShoesList([
      {
        productId: '1010087307',
        modelName: 'W NIKE COURT VISION ALTA LTR',
        image: 'https://image.a-rt.com/art/product/2022/01/60008_1642143249212.jpg?shrink=580:580',
      },
      {
        productId: '1020108507',
        modelName: '조그 100 2 맨 엑스트라 와이드',
        image: 'https://image.a-rt.com/art/product/2024/07/08615_1721974809586.jpg?shrink=580:580',
      },
      {
        productId: '8209459151000',
        modelName: 'SALOMON X Ultra 4 Mid GTX',
        image: 'https://perfittdemo.myshopify.com/cdn/shop/files/Untitled_12.png?v=1715936706&width=1946',
      },
    ]);
  }, []);

  const editUserImg = () => {};

  return (
    <>
      <Header
        title='신발장'
        leftBtn='back'
      />

      <div className='h-full p-4 pt-14 flex flex-col'>
        {/* USER 기본 정보 */}
        <div className='flex gap-5 items-center py-[5px] px-3'>
          <div className='relative w-[50px] h-[50px]'>
            <img
              src={userIcon}
              alt='User profile picture'
              className='w-full h-full object-cover rounded-full'
            />
            <button
              className='absolute bottom-0 right-0 w-[16px] h-[16px]'
              onClick={editUserImg}
            >
              <img
                src={plusCircleIcon}
                alt='Edit user image'
              />
            </button>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-[16px] font-semibold leading-5'>{userInfo.name}</h3>
            <p className='text-[14px] leading-[22px]'>평소 신는 사이즈 | {userInfo.size}</p>
          </div>
        </div>

        {/* 신발장 */}
        {shoesList === undefined || shoesList.length === 0 ? <SREmpty /> : <SRShoeRack shoesList={shoesList} />}
      </div>
    </>
  );
}

export default ShoeRack;
