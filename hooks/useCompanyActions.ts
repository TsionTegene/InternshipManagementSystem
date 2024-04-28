import { useCompanySignup } from "@/queries/useCompanyQueries";
import { useCompanyStore } from "@/stores/company.store";
import { useState } from "react";

export function useCompanyActions() {
    const setCompany = useCompanyStore((state: any) => state.setCompany);
    const setIsLoading = useCompanyStore((state: any) => state.setIsLoading);
    const setError = useCompanyStore((state: any) => state.setError);
    const company = useCompanyStore((state: any) => state.company);

    const signUpCompany = useCompanySignup();


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