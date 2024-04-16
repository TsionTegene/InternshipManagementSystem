import { fetchCollegebyUnId } from "@/api/college/queries";
import { registerDepartment, registerUniversity } from "@/api/university/mutation";
import { fetchUniversity } from "@/api/university/queries";
import { useMutation, useQuery } from "@tanstack/react-query";

// using useQuery hook to fetch data from the server
export function useUniversityData () {
    const query = useQuery({
        queryKey: ["university"],
        queryFn: () => fetchUniversity()
    })

    return query;
}

export function usecollegeDatabyUnId () {
    const query = useQuery({
        queryKey: ["college"],
        queryFn: () => fetchCollegebyUnId()
    })

    return query;
}

export const useUniversitySignup = ()=> {
    const mutation = useMutation({
      mutationFn: (formData: FormData) => registerUniversity(formData),
    })
  
    return mutation;
  };
//@ts-ignore
export const useUnivesityAddDepartment = () =>{
    const mutation = useMutation({

        mutationFn:(formData: FormData) => registerDepartment(formData),

    })


    return mutation 
}