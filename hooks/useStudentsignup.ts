import {useMutation } from '@tanstack/react-query'
import { registerStudent } from '@/api/student/mutations';

export const useStudentSignup= () => {

  const mutations =  useMutation({
    mutationKey: [`studentsinup`],
    mutationFn: registerStudent
    });

    return mutations
};