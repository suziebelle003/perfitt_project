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
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return res.data;
  } catch (err) {
    throw err;
  }
};
