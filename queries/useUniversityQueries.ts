import { fetchUniversity } from "@/api/university/queries";
import { useQuery } from "@tanstack/react-query";

// using useQuery hook to fetch data from the server
export function useUniversity () {
    const query = useQuery({
        queryKey: ["university"],
        queryFn: () => fetchUniversity()
    })

    return query;
}