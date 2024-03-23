import { useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../utils/customAxios';

export const getCompletedStudy = async () => {
  const res = await api.get('/study/complete');
  return res;
};

export function useStudyComplete() {
  const { data } = useQuery({
    queryKey: ['studyCompleted'],
    queryFn: getCompletedStudy,
  });

  return data;
}

export const getCompletedMentoring = async () => {
  const res = await api.get('/');
  console.log(res);
  return res;
};

export function usePrefetchMentoring() {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: ['mentoringCompleted'],
    queryFn: getCompletedMentoring,
  });
}
