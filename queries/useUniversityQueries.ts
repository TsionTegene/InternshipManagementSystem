import { addCollege, registerUniversity } from "@/api/university/mutation";
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

export const useUniversitySignup = ()=> {
    const mutation = useMutation({
      mutationFn: (formData: FormData) => registerUniversity(formData),
    })
  
    return mutation;
  };

export const useUnivesityAddCollage = () =>{
    const mutation = useMutation({

        mutationFn:(formData: FormData) => addCollege(formData),

    })


    return mutation 
}