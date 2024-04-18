import { login } from "@/api/login"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
    const mutation = useMutation({
        mutationFn: (formData: any) => login(formData),
    })

    return mutation;
}