/* eslint-disable react-hooks/rules-of-hooks */
import { registerUser } from "@/api/user/mutations";
import { useMutation } from "@tanstack/react-query";


export const userigisteruser = ()=> {
    const mutation = useMutation({
      mutationFn: (formData: FormData) => registerUser(formData),
    })
  
    return mutation;
  };
