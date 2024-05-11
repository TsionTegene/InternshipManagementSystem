/* eslint-disable react-hooks/rules-of-hooks */
import { fetchCollegebyUnId, registerUser, updateUser } from "@/api/user/mutations";
import { allRole, allUniversityUser, countAdvisor, fetchAdvisor, fetchUserWithRoleNull } from "@/api/user/queries";
import { useMutation, useQuery } from "@tanstack/react-query";


export const userigisteruser = (id: string) => {
  const mutation = useMutation({
    mutationFn: (formData: FormData) => registerUser(formData, id),
  })

  return mutation;
};
export const useUserRollNull = (id: string) => {

  const query = useQuery({
    queryKey: ["nullrole"],
    queryFn: () => fetchUserWithRoleNull(id)
  })
  console.log("at hook", query)
  return query;
}

export const useAllRoll = () => {

  const query = useQuery({
    queryKey: ["Role"],
    queryFn: () => allRole()
  })

  return query;
}

export const useAllUniversityMembers = (id: string) => {

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

export const useDeptAdvisorData = (id: string) => {

  const query = useQuery({
    queryKey: ["advisor"],
    queryFn: () => fetchAdvisor(id)
  })

  return query;
}

export const useCountDeptAdvisorData = (id: string) => {

  const query = useQuery({
    queryKey: ["advisor"],
    queryFn: () => countAdvisor(id)
  })

  return query;
}