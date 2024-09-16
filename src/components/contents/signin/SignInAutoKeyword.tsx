import { useEffect, useRef } from 'react';

const SignInAutoKeyword = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const apiKeyWords = [
    '비 오는날 신기 좋은 레인부츠 브랜드 알려줘',
    '요즘 등산할 때 신기 좋은 가벼운 등산화 추천해줘',
    '요즘 등산할 때 신기 좋은 가벼운 등산화 추천해줘',
  ]; // 추천 키워드

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      // console.log('Wheel event detected:', e.deltaY); // 휠을 쓸 때마다 콘솔에서 확인가능 (메모이제이션 필요)
      if (scrollContainer) {
        scrollContainer.scrollLeft += e.deltaY; // 마우스 휠의 Y 축 움직임을 가로 스크롤로 변환
      }
    };
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', onWheel);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', onWheel);
      }
    };
  }, []);

  const splitKeyword = (keyword: string) => {
    const middleLen = Math.floor(keyword.length / 2) - 1;

    for (let i = middleLen; i < keyword.length; i++) {
      if (keyword[i] === ' ') {
        return (
          <>
            {keyword.slice(0, i)}
            <br />
            {keyword.slice(i)}
          </>
        );
      }
    }

    return (
      <>
        {keyword.slice(0, middleLen)}
        <br />
        {keyword.slice(middleLen)}
      </>
    );
  };

  const onClickKeyWord = () => {}; // 키워드를 눌렀을 때 발생하는 이벤트

  return (
    <div
      ref={scrollContainerRef}
      className='flex gap-2 py-[10px] overflow-x-auto scrollbar-hide'
    >
      {' '}
      {/* 스크롤 및 스크롤바 숨김 */}
      {apiKeyWords.map((keyword, index) => (
        <div
          onClick={onClickKeyWord}
          key={index}
          className='h-[55px] px-[14px] py-[10px] flex-shrink-0
          bg-white rounded-[10px] drop-shadow-md
            leading-[18px] text-[12px] text-[#808080] text-center'
        >
          {splitKeyword(keyword)}
        </div>
      ))}
    </div>
  );
};

export default SignInAutoKeyword;
