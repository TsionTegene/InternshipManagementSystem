import { createCollege, registerDepartment, registerUniversity } from "@/api/university/mutation";
import { fetchCollegebyUnId, fetchDepartment, fetchUniversity, } from "@/api/university/queries";
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
        queryFn: () => fetchCollegebyUnId("661ecb59812cdbe0c0f691c4")
    })

    return query;
}

export const useUniversitySignup = ()=> {
    const mutation = useMutation({
      mutationFn: (formData: FormData) => registerUniversity(formData),
    })
  
    return mutation;
  };

export const useUnivesityAddDepartment = () =>{
    const mutation = useMutation({

        mutationFn:(formData: FormData) => registerDepartment(formData),

    })


    return mutation 
}

export const useUnivesityAddCollege = () =>{
    const mutation = useMutation({

        mutationFn:(formData: FormData) => createCollege(formData),

    })


    return mutation 
}


export const useDepartmentData = () =>{
    const query = useQuery({
        queryKey: ["Department"],
        queryFn: () => fetchDepartment()
    })

    return query;
}