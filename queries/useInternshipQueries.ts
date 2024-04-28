import { registerInternship } from "@/api/internship/mutation";
import { useMutation } from "@tanstack/react-query"

export const useCreateInternshipMutation = () =>{
    const mutations = useMutation({
        mutationFn: (formData: FormData) => registerInternship(formData),
    })

    return mutations;
}