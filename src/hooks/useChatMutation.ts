import { useMutation } from '@tanstack/react-query';
import { postChatCompletions } from '../api/perfitt/postChatCompletions';

export const useChatResponseMutation = () => {
  return useMutation({
    mutationFn: (text: string) => postChatCompletions(text),
  });
};
