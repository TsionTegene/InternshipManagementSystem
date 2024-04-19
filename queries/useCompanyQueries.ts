import { registerCompany } from "@/api/company/mutations";
import { useMutation } from "@tanstack/react-query";

// 
export const useCompanySignup = () => {
    const mutation = useMutation({
        mutationFn: (formData: FormData) => registerCompany(formData),
    })

    return mutation;
}