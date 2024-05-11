/* eslint-disable react-hooks/rules-of-hooks */
import { registerCompany } from "@/api/company/mutations";
import { useCompanyData, FindCompanyByUserId, useCompanySignup, useDepCompany,useMentorSignup, useFindMentorByCId } from "@/queries/useCompanyQueries";
import { useCompanyStore } from "@/stores/company.store";
import useMentorStore from "@/stores/mentors.store";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const dpID = localStorage.getItem("depId")

export function useCompanyActions() {
    const setCompany = useCompanyStore((state: any) => state.setCompany);
    const setIsLoading = useCompanyStore((state: any) => state.setIsLoading);
    const setError = useCompanyStore((state: any) => state.setError);
    const company = useCompanyStore((state: any) => state.company);

    const signUpCompany = useCompanySignup();
    const companyData = useCompanyData();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (companyData.isSuccess) {
                    setCompany(companyData.data);
                }
                if (companyData.isLoading) {
                    setIsLoading(companyData.isLoading);
                }
            } catch (error) {
                console.error("Error fetching College data:", error);
                setError(error);
            }
        };

        fetchData();
    }, [
        companyData.isSuccess,
        companyData.isLoading,
        setCompany,
        setIsLoading,
        setError,

    ]);
    return {
        company,
        isLoading: signUpCompany.isPending,
        error: signUpCompany.error,
        signUpCompany,
        isSuccess: signUpCompany.isSuccess
    }
}

export function useDepCompanyActions() {
    const setCompany = useCompanyStore((state: any) => state.setCompany);
    const setIsLoading = useCompanyStore((state: any) => state.setIsLoading);
    const setError = useCompanyStore((state: any) => state.setError);
    const company = useCompanyStore((state: any) => state.company);

    const companyData = useDepCompany(dpID as string);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (companyData.isSuccess) {
                    setCompany(companyData.data);
                }
                if (companyData.isLoading) {
                    setIsLoading(companyData.isLoading);
                }
            } catch (error) {
                console.error("Error fetching College data:", error);
                setError(error);
            }
        };

        fetchData();
    }, [
        companyData.isSuccess,
        companyData.isLoading,
        setCompany,
        setIsLoading,
        setError,
        companyData

    ]);
    return {
        company,
    
    }
}


// export function useFindCompanyByUserId() {
//     const { data, error, isPending, isSuccess, isError, mutate } = useFindCompanyByUserId();
//     const [companyId, setCompanyId] = useState<string | null>(null);
//     useEffect(()=> {

//     })
// }

export function useAddMentor() {
    const { data, error, isPending, isSuccess, isError, mutate } = useMentorSignup();
    const [mentor, setMentor] = useState<any | null>(null);
    const userId = localStorage.getItem('userId'); // Consider using context or props for better practices
    const { data: companyId } = FindCompanyByUserId(userId);
    console.log("company Id: ", companyId);

    const addMentor = async (formValues: any) => {
        const data = { companyId: companyId, ...formValues };
        setMentor(data);
        const result = await mutate(data);
        console.log("mentor: ", result);
    }
    return {
        addMentor,
        isLoading: isPending,
        error,
        isSuccess,
    }
}

export function useFindMentorsByCompanyId() {
    const setMentors = useMentorStore((state: any) => state.setMentors);
    const setError = useMentorStore((state: any) => state.setError);
    const setIsLoading = useMentorStore((state: any) => state.setIsLoading);
    const mentors = useMentorStore((state: any) => state.mentors);

    const userId = localStorage.getItem('userId'); // Consider using context or props for better practices
    const { data: companyId } = FindCompanyByUserId(userId);
    console.log("company Id from findMentors: ", companyId);
    const data = useFindMentorByCId(companyId);
    if (data.isSuccess) {
        setMentors(data.data);
    }
    if (data.isLoading) {
        setIsLoading(data.isLoading);
    }

    return { mentors, isMLoading: data.isLoading, error: data.error}
}