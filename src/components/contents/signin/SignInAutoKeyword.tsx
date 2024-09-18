// src/components/SignInAutoKeyword.tsx
import { useState, useEffect, useRef } from 'react';
import { fetchData } from '../../../api/signin/getRecommendApi'; // 파일 경로를 적절히 조정

const SignInAutoKeyword = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [apiKeyWords, setApiKeyWords] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setApiKeyWords(result.data);
      setError(result.error);
    };

    getData();

    const scrollContainer = scrollContainerRef.current;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (scrollContainer) {
        scrollContainer.scrollLeft += e.deltaY;
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
    const middleLen = Math.floor(keyword.length / 2);

    if (keyword.length <= 10) {
      return <>{keyword}</>;
    }

    for (let i = middleLen; i < keyword.length; i++) {
      if (keyword[i] === ' ') {
        return (
          <>
            {keyword.slice(0, i)}
            <br />
            {keyword.slice(i + 1)}
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

  const onClickKeyWord = (keyword: string) => {
    console.log(`키워드 클릭됨: ${keyword}`);
  };

  return (
    <div>
      {error && <div className='error-message'>{error}</div>}
      <div
        ref={scrollContainerRef}
        className='flex gap-2 py-[10px] overflow-x-auto scrollbar-hide'
      >
        {apiKeyWords ? (
          apiKeyWords.map((keyword, index) => (
            <div
              key={index}
              onClick={() => onClickKeyWord(keyword)}
              className='h-[55px] px-[14px] py-[10px] flex-shrink-0
              bg-white rounded-[10px] drop-shadow-md
              leading-[18px] text-[12px] text-[#808080] text-center'
            >
              {splitKeyword(keyword)}
            </div>
          ))
        ) : (
          <div>추천 키워드를 불러오는 중입니다...</div>
        )}
      </div>
    </div>
  );
};

export default SignInAutoKeyword;
