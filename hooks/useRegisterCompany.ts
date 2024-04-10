import { registerCompany } from "@/api/company/mutations";
import { useMutation } from "@tanstack/react-query";

export function useRegisterCompany() {
    const mutation = useMutation({
        mutationFn: (formData: FormData) => registerCompany(formData),
    })

    return mutation;
}