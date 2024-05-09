import { registerCompany } from "@/api/company/mutations";
import { fetchCompany } from "@/api/company/queries";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCompanySignup = () => {
    const mutation = useMutation({
        mutationFn: (formData: FormData) => registerCompany(formData),
    })

    return mutation;
}

export const useCompanyData = () => {
    const query = useQuery({
        queryKey: ["company"],
        queryFn: async () => await fetchCompany(),
    })
    return query;
}