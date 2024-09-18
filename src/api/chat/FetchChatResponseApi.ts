import axios from 'axios';
import { BASE_URL } from '../../config/config';
import { IMessage } from '../../types/chat';

export const fetchChatResponseApi = async (content: string): Promise<IMessage> => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/chat/completions`,
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
    console.error('err', err);
    throw err;
  }
};
