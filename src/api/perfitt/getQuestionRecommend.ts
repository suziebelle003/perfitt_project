import axios from 'axios';
import { BASE_URL } from '../../config/config';

export const getQuestionRecommend = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/question/recommend`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
