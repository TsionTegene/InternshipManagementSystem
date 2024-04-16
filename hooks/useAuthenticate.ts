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
        const setJwtToken = ({ accessToken, refreshToken }: { accessToken: string, refreshToken: string }) => {
            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)
        }
        const accessToken = localStorage.getItem('accessToken');

        const payload = accessToken ? decodeToken(accessToken) : null;
        if (isSuccess && payload) {
            setUserId(payload.userId);
            setEmail(payload.email);
            setRole(payload.role);
        }
        if (isPending) {
            setIsLoading(true);
        }
        if (isError && error) {
            setIsError(error);
            setIsLoading(false);
        }
    }, [data, isSuccess, isError, isPending, error, setUserId, setEmail, setRole, setIsLoading]);

    const authenticate = (formData: FormData) => {
        mutate(formData);
    };
    const payload = data ? decodeToken(data.accessToken) : null;
    return { authenticate, isPending, isError, error, payload };
};

const decodeToken = (token: string) => {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as { sub: string, email: string, role: string };

    console.log(decodedToken);
    // Access user information
    const userId = decodedToken.sub;
    const email = decodedToken.email;
    const role = decodedToken.role;

    return { userId, email, role };
}

function setIsLoading(arg0: boolean) {
    throw new Error('Function not implemented.');
}
