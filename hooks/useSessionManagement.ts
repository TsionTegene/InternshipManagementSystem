import decodeToken from "@/lib/decodeToken";
import useSessionStore from "@/stores/sessionStore";

// hooks/useSessionManagement.js
export async function useSessionManagement() {
    const setUserId = useSessionStore((state) => state.setUserId);
    const setUser = useSessionStore((state) => state.setUser);
    const setEmail = useSessionStore((state) => state.setEmail);
    const setRole = useSessionStore((state) => state.setRole);
    const setIsError = useSessionStore((state) => state.setIsError);
    const setIsLoading = useSessionStore((state) => state.setIsLoading);

    const saveSession = async (data) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
        }
        setUser(data.user);
        const payload = await decodeToken(data.access_token); // Assume decodeToken is synchronous or refactor as needed
        setUserId(payload.userId);
        setEmail(payload.email);
        setRole(payload.role);
    };

    return { setIsError, setIsLoading, saveSession };
}
