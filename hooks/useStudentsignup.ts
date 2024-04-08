import { UseMutationResult, useMutation, UseMutationOptions } from '@tanstack/react-query'
import { registerStudent } from '@/api/student/mutations';
import { IStudentSignup } from '@/types';

export const useStudentSignup = ()=> {
  const mutation = useMutation({
    mutationFn: (formData: FormData) => registerStudent(formData),
  })

  return mutation;
};