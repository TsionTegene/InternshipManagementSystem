import { useEffect } from 'react';
import { useLogin } from '@/queries/useLogin';
import useSessionStore from '@/stores/sessionStore';
import jwt from 'jsonwebtoken';

export const useAuthenticate = () => {
    const { mutate, data, isSuccess, isError, isPending, error } = useLogin();
    const setUserId = useSessionStore((state) => state.setUserId);
    const setEmail = useSessionStore((state) => state.setEmail);
    const setRole = useSessionStore((state) => state.setRole);
    const setIsError = useSessionStore((state) => state.setIsError);
    const setIsLoading = useSessionStore((state) => state.setIsLoading);

    useEffect(() => {
        if (isError && error) {
            setIsError(error);
            setIsLoading(false);
            return;  // Early exit if there is an error
        }

        if (isPending) {
            setIsLoading(true);
            return;  // Early exit if still pending
        }

        if (isSuccess && data && data.access_token) {
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('refresh_token', data.refresh_token);
            
            const payload = decodeToken(data.access_token);
            if (payload) {
                setUserId(payload.userId);
                setEmail(payload.email);
                setRole(payload.role);
            }
        }
    }, [isSuccess, isPending, isError, error, data]); // Only re-run on changes to these values

    const authenticate = (formData: any) => {
        mutate(formData);
    };

    return { authenticate, isPending, isError, error };
};


interface DecodedToken {
    sub: string;
    email: string;
    role: string;
}

const decodeToken = (token: string): { userId: string, email: string, role: string } | undefined => {
    console.log("Token received for decoding:", token);
    const decodedToken = jwt.verify(token, "abel5173") as DecodedToken;  // Use the secure or default secret
    console.log("Decoded token:", decodedToken);
    return {
        userId: decodedToken.sub,
        email: decodedToken.email,
        role: decodedToken.role
    };
};

