import { registerCompany } from "@/api/company/mutations";
import { useCompanyData, useCompanySignup } from "@/queries/useCompanyQueries";
import { useCompanyStore } from "@/stores/company.store";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

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

// export function useFindCompanyByUserId() {
//     const { data, error, isPending, isSuccess, isError, mutate } = useFindCompanyByUserId();
//     const [companyId, setCompanyId] = useState<string | null>(null);
//     useEffect(()=> {
        
//     })
// }