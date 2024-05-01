import { registerInternship } from "@/api/internship/mutation";
import { filterInternships } from "@/api/internship/queries";
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreateInternshipMutation = () =>{
    const mutations = useMutation({
        mutationFn: (formData: FormData) => registerInternship(formData),
    })

    return mutations;
}

export const useFilterInternships = (filter: any) => {
    const query = useQuery({
        queryKey: ['internships'], // Fix: Pass the queryKey as an array
        queryFn: () => filterInternships(filter),
    })

    return query;
}