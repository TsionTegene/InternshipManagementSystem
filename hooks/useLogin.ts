import useSessionStore from "@/stores/sessionStore";

export default function useLogin() {
    const { isLoading, error, token, user } = useSessionStore();

    const login = async (formData: FormData) => {
        setIsLoading(true);
        try {
            const response = await login(formData);
            setToken(response.token); // Assuming response.data contains "token" property
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return login;
}
function setToken(token: any) {
    throw new Error("Function not implemented.");
}

