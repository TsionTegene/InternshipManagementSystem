import { getReportsByAdvisorId, getReportsById } from "@/api/report /query"
import { useQuery } from "@tanstack/react-query"

export const useFetchReports = (id: string) => {
    const query = useQuery({
        queryKey: ["reportFerch"],
        queryFn: async () => await getReportsById(id),
    })

    return query;
}

export const useFetchReportsByAdvisor = (id: string) => {
    const query = useQuery({
        queryKey: ["reportFerch"],
        queryFn: async () => await getReportsByAdvisorId(id),
    })

    return query;
}