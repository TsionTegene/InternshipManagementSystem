import { findApplicationsByCompanyId } from "@/api/application/query";
import { useQuery } from "@tanstack/react-query";

export const useFetchApplicationByCId = (data: any) => {
    const query = useQuery({
        queryKey: ['findMentorByCompanyId'],
        queryFn: () => findApplicationsByCompanyId(data),
    })

    return query;
}