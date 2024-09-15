import axios from 'axios';
import { BASE_URL } from '../../config/config';

export const fetchChatResponseApi = async (content: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/chat/completions,`,
      {
        message: { content },
      },
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('res', res);
    return res.data;
  } catch (err) {
    console.log('err', err);
    throw err;
  }
};
