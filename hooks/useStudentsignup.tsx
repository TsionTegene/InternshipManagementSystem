import studentsignup from '@/api/student/mutations';
import { useQuery } from '@tanstack/react-query'

export const useStudentSignup= () => {

  return useQuery({
    queryKey: [`studentsinup`],
     queryFn: () => studentsignup
    });
};