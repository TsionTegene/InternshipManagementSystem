import { useReportStore } from "@/stores/report.store";

import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useFetchMentorQuery } from "@/queries/useUsersdata";
import { useFetchReports, useFetchReportsByAdvisor } from "@/queries/useReportQuery";
import { advisorrepos } from "@/api/user/queries";
import { usereportByAdvisor } from "@/queries/useStudentQueries";

export function useFetchReportByMentorId() {
    const queryClient = useQueryClient();
    const setReports = useReportStore((state: any) => state.setReports);
    const setIsLoading = useReportStore((state: any) => state.setIsLoading);
    const setError = useReportStore((state: any) => state.setError);
    const reports = useReportStore((state: any) => state.reports);

    const userId = localStorage.getItem('userId'); 
    const { data: mentorID } = useFetchMentorQuery(userId as string);
    const report = useFetchReports(mentorID);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (report.isSuccess) {
                    setReports(report.data);
                }

                if (report.isLoading) {
                    setIsLoading(report.isLoading);
                }

                if (report.isError) {
                    setError(report.error);
                }
            } catch (error) {
                console.error("Error fetching university data:", error);
                setError(error);
            }
        };

        fetchData();
    }, [report, report.isSuccess, report.isLoading, report.error, report.isError, report.data, setReports, setIsLoading, setError])

    // const updateApp = async (status: string, applicationId: string) => {
    //     await mutateAsync({ status, applicationId });
    //     queryClient.invalidateQueries("findApplicationsByCompanyId");
    // }

    return {
        reports,
        isLoading: report.isLoading,
        error: report.error,
        isSuccess: report.isSuccess
    }
}

export function useFetchReportByAdvisorId() {
    const queryClient = useQueryClient();
    const setReports = useReportStore((state: any) => state.setReports);
    const setIsLoading = useReportStore((state: any) => state.setIsLoading);
    const setError = useReportStore((state: any) => state.setError);
    const reports = useReportStore((state: any) => state.reports);

    const userId = localStorage.getItem('userId');
    const { data: mentorID } = usereportByAdvisor(userId as string);
    const report = useFetchReportsByAdvisor(mentorID);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (report.isSuccess) {
                    setReports(report.data);
                }

                if (report.isLoading) {
                    setIsLoading(report.isLoading);
                }

                if (report.isError) {
                    setError(report.error);
                }
            } catch (error) {
                console.error("Error fetching university data:", error);
                setError(error);
            }
        };

        fetchData();
    }, [report, report.isSuccess, report.isLoading, report.error, report.isError, report.data, setReports, setIsLoading, setError])

    // const updateApp = async (status: string, applicationId: string) => {
    //     await mutateAsync({ status, applicationId });
    //     queryClient.invalidateQueries("findApplicationsByCompanyId");
    // }

    return {
        reports,
        isLoading: report.isLoading,
        error: report.error,
        isSuccess: report.isSuccess
    }
}