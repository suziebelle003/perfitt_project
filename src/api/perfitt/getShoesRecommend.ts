import axios from 'axios';
import { BASE_URL } from '../../config/config';

export const getShoesRecommend = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/shoes/recommend`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
