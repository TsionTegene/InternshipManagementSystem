/* eslint-disable react-hooks/rules-of-hooks */
import { fetchCollegebyUnId, registerUser, updateUser } from "@/api/user/mutations";
import { allRole,allUniversityUser, fetchUserWithRoleNull } from "@/api/user/queries";
import { useMutation, useQuery } from "@tanstack/react-query";


export const userigisteruser = (id:string)=> {
    const mutation = useMutation({
      mutationFn: (formData: FormData) => registerUser(formData,id),
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

export const useAllUniversityMembers = (id:string) => {

  const query = useQuery({
    queryKey: ["universityMemeber"],
    queryFn: () => allUniversityUser(id)
  })

  return query;
}

export const useUpdatedUser = (id: string) => {
  const mutation = useMutation({
    mutationKey: ["universityMemeber"],
    mutationFn: (formData: FormData) => updateUser(formData, id),

  })


  return mutation
}