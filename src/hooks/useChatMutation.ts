import { useMutation } from '@tanstack/react-query';
import { fetchChatResponseApi } from '../api/chat/FetchChatResponseApi';
import { IText } from '../types/chat';

export const useChatResponseMutation = () => {
  return useMutation({
    // 채팅 응답 API에 내가 적은 content 담아줘
    mutationFn: (data: IText) => fetchChatResponseApi(data),
  });
};
