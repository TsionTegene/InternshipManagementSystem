"use client"

import { useFetchApplicationByCId, useUpdateApplication } from "@/queries/useApplicationQueries";
import { FindCompanyByUserId } from "@/queries/useCompanyQueries";
import { useApplicationStore } from "@/stores/application.store";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useFetchApplicationsByCompanyId() {
    const queryClient = useQueryClient();
    const setApplications = useApplicationStore((state: any) => state.setApplications);
    const setIsLoading = useApplicationStore((state: any) => state.setIsLoading);
    const setError = useApplicationStore((state: any) => state.setError);
    const applications = useApplicationStore((state: any) => state.applications);

    const userId = localStorage.getItem('userId'); // Consider using context or props for better practices
    const { data: companyId } = FindCompanyByUserId(userId);
    console.log("company Id from fetch applications: ", companyId);
    const application = useFetchApplicationByCId(companyId);
    const { mutateAsync } = useUpdateApplication();

    useEffect(()=> {
        const fetchData = async () => {
            try {
        if (application.isSuccess) {
            setApplications(application.data);
        }
    
        if (application.isLoading) {
            setIsLoading(application.isLoading);
        }
    
        if (application.isError) {
            setError(application.error);
        }
            } catch (error) {
                console.error("Error fetching university data:", error);
                setError(error);
            }
        };

        fetchData();
    }, [application, application.isSuccess, application.isLoading, application.error, application.isError, application.data, setApplications, setIsLoading, setError])

    const updateApp = async (status: string, applicationId: string) => {
        await mutateAsync({ status, applicationId });
        queryClient.invalidateQueries("findApplicationsByCompanyId");
    }

    return {
        updateApp,
        applications,
        isLoading: application.isLoading,
        error: application.error,
        isSuccess: application.isSuccess
    }
}