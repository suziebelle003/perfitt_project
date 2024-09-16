import axios from 'axios';
import { BASE_URL } from '../../config/config';

export const getHelloApi = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/hello`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
};
