import { fetchDepartment } from "@/api/department/queries";
import { useQuery } from "@tanstack/react-query";

export function useDepartment() {
    // here we are using the useQuery hook to fetch the data from the server
    // we are passing the queryKey and queryFn to the useQuery hook
    const query = useQuery({
        queryKey: ["department"],
        queryFn: () => fetchDepartment()
    })

    return query;
}