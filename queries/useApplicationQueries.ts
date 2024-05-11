import { updateApplications } from "@/api/application/mutation";
import { findApplicationsByCompanyId } from "@/api/application/query";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useFetchApplicationByCId = (data: any) => {
    const query = useQuery({
        queryKey: ['findApplicationsByCompanyId'],
        queryFn: () => findApplicationsByCompanyId(data),
    })

    return query;
}

export const useUpdateApplication = () => {
    const mutations = useMutation({
        mutationFn: ({ status, applicationId }: { status: string, applicationId: string }) => updateApplications(status, applicationId),
    })

    return mutations;
}