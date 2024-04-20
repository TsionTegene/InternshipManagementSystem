/* eslint-disable react-hooks/rules-of-hooks */
import { fetchCollegebyUnId, registerUser } from "@/api/user/mutations";
import { allRole, fetchUserWithRoleNull } from "@/api/user/queries";
import { useMutation, useQuery } from "@tanstack/react-query";


export const userigisteruser = ()=> {
    const mutation = useMutation({
      mutationFn: (formData: FormData) => registerUser(formData),
    })
  
    return mutation;
  };
export const useUserRollNull = ()=>{

  const query = useQuery({
    queryKey: ["user"],
    queryFn: () =>  fetchUserWithRoleNull()
})

return  query;
}

export const useAllRoll = ()=>{

  const query = useQuery({
    queryKey: ["Role"],
    queryFn: () =>  allRole()
})

return  query;
}

