import { login } from "@/api/login"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
    const mutation = useMutation({
        mutationFn: (formData: FormData) => login(formData),
    })

    return mutation;
}