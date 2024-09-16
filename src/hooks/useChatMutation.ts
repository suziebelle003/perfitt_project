import { useMutation } from '@tanstack/react-query';
import { fetchChatResponseApi } from '../api/chat/FetchChatResponseApi';

export const useChatResponseMutation = () => {
  return useMutation({
    // 채팅 응답 API에 내가 적은 content 담아줘
    mutationFn: (content: string) => fetchChatResponseApi(content),
  });
};
