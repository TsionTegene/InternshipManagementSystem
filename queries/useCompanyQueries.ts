import { countDepCompany, fetchCompany, fetchDepCompany, fetchpplicationsByCompanyId, findCompanyByUserId, findMentorsByCompanyId } from "@/api/company/queries";
import { addMentor, assignMentor,  registerCompany } from "@/api/company/mutations";
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
export const useDepCompany = (id:string ) => {
    const query = useQuery({
        queryKey: ["depcompany"],
        queryFn: async () => await fetchDepCompany(id),
    })
    return query;
}

export const useCountDepCompany = (id: string) => {
    const query = useQuery({
        queryKey: ["countdepcompany"],
        queryFn: async () => await countDepCompany(id),
    })
    return query;
}

export const useFetchApplicationByCId = (cId: string) => {
    const query = useQuery({
        queryKey: ['fetchAppByCompanyId'],
        queryFn: () => fetchpplicationsByCompanyId(cId),
    })

    return query;
}

export const useAssignMentor = () => {
    const mutation = useMutation({
        mutationFn: (data: { mentorId: string, studentId: string }) => assignMentor(data.mentorId, data.studentId),
    })

    return mutation;
}