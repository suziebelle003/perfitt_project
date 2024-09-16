import axios from 'axios';
import { BASE_URL } from '../../config/config';

export const getKeywordListApi = async () => {
  try {
    const res = await axios.get<string[]>(`${BASE_URL}/api/keywords`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (err) {
    console.log('error', err);
    throw err;
  }
};
