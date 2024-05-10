"use client"

import { useFetchApplicationByCId } from "@/queries/useApplicationQueries";
import { FindCompanyByUserId } from "@/queries/useCompanyQueries";
import { useApplicationStore } from "@/stores/application.store";

export function useFetchApplicationsByCompanyId() {
    const setApplications = useApplicationStore((state: any) => state.setApplications);
    const setIsLoading = useApplicationStore((state: any) => state.setIsLoading);
    const setError = useApplicationStore((state: any) => state.setError);
    const applications = useApplicationStore((state: any) => state.applications);

    const userId = localStorage.getItem('userId'); // Consider using context or props for better practices
    const { data: companyId } = FindCompanyByUserId(userId);
    console.log("company Id from fetch applications: ", companyId);
    const application = useFetchApplicationByCId(companyId);

    if (application.isSuccess) {
        setApplications(application.data);
    }

    if (application.isLoading) {
        setIsLoading(application.isLoading);
    }

    if (application.isError) {
        setError(application.error);
    }

    return {
        applications,
        isLoading: application.isLoading,
        error: application.error,
        isSuccess: application.isSuccess
    }
}