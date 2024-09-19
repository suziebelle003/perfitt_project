import axios from 'axios';

export const getRecomendListApi = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/shoes/recommend`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    });
    console.log(response.data);

    // 응답 데이터의 형식을 확인하고 맞게 처리
    if (Array.isArray(response.data)) {
      return {
        data: response.data as {
          image: string;
          link: string;
          modelName: string;
          brand: string;
          modelNo: string;
          productId: string;
        }[],
        error: null,
      };
    } else {
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
