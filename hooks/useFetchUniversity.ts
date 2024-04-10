import { useUniversity } from "@/queries/useUniversityQueries";
import useUniversityStore from "@/stores/university.store";
import { useEffect } from "react";

export const useUniversityData = () => {
    const setUniversities = useUniversityStore((state: any) => state.setUniversities);
    const data = useUniversity();

    let universities = null;
    if(data.isSuccess) {
        universities = data.data;
        setUniversities(data.data);
    }

    useEffect(() => {
        if(universities) {
            setUniversities(universities);
        }
    }, [universities, setUniversities])

    return {
        universities: useUniversityStore((state: any) => state.universities),
        isLoading: data.isLoading,
        isError: data.isError,
        error: data.error
    }
}