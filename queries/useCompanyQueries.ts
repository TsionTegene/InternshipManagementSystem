import { registerCompany } from "@/api/company/mutations";
import { findCompanyByUserId } from "@/api/company/queries";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useCompanySignup = () => {
    const mutation = useMutation({
        mutationFn: (formData: FormData) => registerCompany(formData),
    })

    return mutation;
}

export const FindCompanyByUserId = (userId: string | null) => {
    const query = useQuery({
        queryKey: ['findCompany'],
        queryFn: () => findCompanyByUserId(userId as string),
    })

    return query;
}