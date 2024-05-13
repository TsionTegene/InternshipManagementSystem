import { getReportsById } from "@/api/report /query"
import { useQuery } from "@tanstack/react-query"

export const useFetchReports = (id: string) => {
    const query = useQuery({
        queryKey: ["reportFerch"],
        queryFn: async () => await getReportsById(id),
    })

    return query;
}