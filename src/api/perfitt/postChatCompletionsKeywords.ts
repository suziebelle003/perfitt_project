import axios from 'axios';
import { BASE_URL } from '../../config/config';

export const postChatCompletionsKeywords = async (keywords: string[]) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/api/chat/completions/keywords`,
      { message: { keywords: keywords } },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
