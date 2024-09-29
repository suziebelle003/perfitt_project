// 좋아요/최근본 페이지

// 사이즈 추천
// 좋아요 기능 추가
// 이 신발 더 알아보기
// 무한 스크롤

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import MIToggleMenu from '../../components/contents/mypage/MIToggleMenu';
import MILike from '../../components/contents/mypage/MILike';
import MILatestItem from '../../components/contents/mypage/MILatestItem';

function MyItem() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const [toggleMenu, setToggleMenu] = useState<string>();

  useEffect(() => {
    if (mode === 'latest') setToggleMenu(mode);
    else setToggleMenu('like');
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      <div className='mb-[-19px]'>
        <Header back />
      </div>
      <div className='flex-grow overflow-auto scrollbar-hide'>
        <div className='h-full flex flex-col z-99'>
          <MIToggleMenu
            mode={toggleMenu}
            setMode={setToggleMenu}
          />
          <div className='flex-1 flex flex-col p-4 pb-0 overflow-auto'>
            {toggleMenu === 'like' ? <MILike /> : <MILatestItem />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyItem;
