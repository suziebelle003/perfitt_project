import axios from 'axios';
import { BASE_URL } from '../../config/config';

export const postChatCompletions = async (text: string) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/chat/completions`,
      { message: { content: text } },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
