// src/api/fetchData.ts
import axios from 'axios';

export const fetchData = async () => {
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
      return { data: response.data.map((item: { question: string }) => item.question), error: null };
    } else {
      // 배열이 아닌 경우 에러 처리
      return { data: [], error: '예상과 다른 형식의 데이터 응답' };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        return { data: [], error: '요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.' };
      } else {
        return { data: [], error: 'API 호출 오류: ' + error.message };
      }
    } else {
      return { data: [], error: '알 수 없는 오류 발생' };
    }
  }
};
