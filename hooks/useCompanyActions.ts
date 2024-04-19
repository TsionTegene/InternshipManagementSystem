import { registerCompany } from "@/api/company/mutations";
import { useCompanySignup } from "@/queries/useCompanyQueries";
import { useCompanyStore } from "@/stores/company.store";
import { useMutation } from "@tanstack/react-query";

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