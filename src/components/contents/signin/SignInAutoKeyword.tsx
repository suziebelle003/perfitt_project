import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const SignInAutoKeyword = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [apiKeyWords, setApiKeyWords] = useState<string[] | null>(null); // 초기값을 null로 설정
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/question/recommend`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      });
      console.log(`url:`, import.meta.env.VITE_BASE_URL);
      // 응답 데이터의 형식이 배열인지 확인
      if (Array.isArray(response.data)) {
        // 배열인 경우 map을 사용하여 처리
        setApiKeyWords(response.data.map(item => item.question));
        setError(null); // 성공 시 에러 상태 초기화
      } else {
        // 배열이 아닌 경우 에러 처리
        setError('예상과 다른 형식의 데이터 응답');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 429) {
          setError('요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.');
        } else {
          setError('API 호출 오류: ' + error.message);
        }
      } else {
        setError('알 수 없는 오류 발생');
      }
    }
  };

  useEffect(() => {
    fetchData(); // 컴포넌트가 마운트될 때 fetchData 호출
  }, []);

  const splitKeyword = (keyword: string) => {
    const maxLength = 10;
    if (keyword.length <= maxLength) {
      return keyword;
    }

    const middleIndex = Math.floor(keyword.length / 2);
    const splitIndex = keyword.lastIndexOf(' ', middleIndex);

    return (
      <>
        {keyword.slice(0, splitIndex)}
        <br />
        {keyword.slice(splitIndex + 1)}
      </>
    );
  };

  const onClickKeyWord = (keyword: string) => {
    // 키워드 클릭 시 처리할 로직
    console.log(`키워드 클릭됨: ${keyword}`);
  };

  return (
    <div>
      {error && <div className='text-red-600'>{error}</div>}
      <div
        ref={scrollContainerRef}
        className='flex gap-2 py-[10px] overflow-x-auto scrollbar-hide'
      >
        {apiKeyWords ? (
          apiKeyWords.map((keyword, index) => (
            <div
              onClick={() => onClickKeyWord(keyword)}
              key={index} // 고유한 값 사용을 권장
              className='h-[55px] px-[14px] py-[10px] flex-shrink-0
              bg-white rounded-[10px] shadow-md
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
