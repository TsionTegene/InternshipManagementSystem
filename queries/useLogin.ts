import { login, refreshToken } from "@/api/login"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
    const mutation = useMutation({
        mutationFn: (formData: any) => login(formData),
    })

    return mutation;
}

export const useRefreshToken = () => {
    const mutation = useMutation({
        mutationFn: (token: string) => refreshToken(token),
    })

    return mutation;
}