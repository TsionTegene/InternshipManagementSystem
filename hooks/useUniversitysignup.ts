import { useMutation } from '@tanstack/react-query'
import {registerUniversity} from  '@/api/university/mutation'

export const useUniversitySignup = ()=> {
  const mutation = useMutation({
    mutationFn: (formData: FormData) => registerUniversity(formData),
  })

  return mutation;
};