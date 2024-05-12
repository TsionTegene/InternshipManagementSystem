/* eslint-disable react-hooks/rules-of-hooks */
import { FindCompanyByUserId } from "@/queries/useCompanyQueries";
import { useCreateInternshipMutation, useFilterInternships } from "@/queries/useInternshipQueries";
import { useInternshipStore } from "@/stores/internship.store";

export const useCreateInternship = () => {
    const { data, error, isPending, isSuccess, isError, mutate } = useCreateInternshipMutation();

    const userId = localStorage.getItem('userId'); // Consider using context or props for better practices
    const { data: companyId } = FindCompanyByUserId(userId);

    console.log("companyId: ", companyId);
    console.log("userId: ", userId);

    const createInternship = async (formData: FormData) => {
        const data = { companyId, ...formData };
        console.log("data: ", data)
        await mutate(data);
    };

    return { data, error, isPending, isSuccess, isError, createInternship };
};

export const useFetchInternshipByCompanyId = () => {
    const userId = localStorage.getItem('userId'); // Consider using context or props for better practices
    const { data: companyId } = FindCompanyByUserId(userId);
    console.log("company Id: ", companyId);
    
    const setInternships = useInternshipStore((state: any) => state.setInternships);
    const setIsLoading = useInternshipStore((state: any) => state.setIsLoading);
    const setError = useInternshipStore((state: any) => state.setError);
    const internships = useInternshipStore((state: any) => state.internships);
    const posted_internships = useFilterInternships({ companyId });
    console.log(posted_internships.data)

    if (posted_internships.isSuccess) {
        console.log("data from hooks: ", posted_internships.data)
        setInternships(posted_internships.data);
    }

    return {internships, isILoading: posted_internships.isPending, error: posted_internships.error};
}