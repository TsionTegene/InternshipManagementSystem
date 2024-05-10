import { addMentor, registerCompany } from "@/api/company/mutations";
import { fetchCompany, findCompanyByUserId, findMentorsByCompanyId } from "@/api/company/queries";
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

export const useCompanyData = () => {
    const query = useQuery({
        queryKey: ['findCompany'],
        queryFn: () => fetchCompany(),
    })
    return query;

}

export const useMentorSignup = () => {
    const mutation = useMutation({
        mutationFn: (formData: any) => addMentor(formData),
    })

    return mutation;
}

export const useFindMentorByCId = (cId: string) => {
    const query = useQuery({
        queryKey: ['findMentorByCompanyId'],
        queryFn: () => findMentorsByCompanyId(cId),
    })

    return query;
}