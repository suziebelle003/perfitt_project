import axios from 'axios';
import { BASE_URL } from '../../config/config';

export const getKeywords = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/keywords`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
