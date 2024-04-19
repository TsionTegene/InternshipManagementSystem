import { useEffect } from 'react';
import { useLogin } from '@/queries/useLogin';
import useSessionStore from '@/stores/sessionStore';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation'; // Import useRouter

export const useAuthenticate = () => {
  const { mutate, data, isSuccess, isError, isPending, error } = useLogin();
  const setUserId = useSessionStore((state) => state.setUserId);
  const setUser = useSessionStore((state) => state.setUser)
  const setEmail = useSessionStore((state) => state.setEmail);
  const setRole = useSessionStore((state) => state.setRole);
  const setIsError = useSessionStore((state) => state.setIsError);
  const setIsLoading = useSessionStore((state) => state.setIsLoading);
  const router = useRouter(); // Get router instance

  useEffect(() => {
    if (isError && error) {
      setIsError(error);
      setIsLoading(false);
      return;
    }

    if (isPending) {
      setIsLoading(true);
      return;
    }

    if (isSuccess && data && data.access_token) {
      setUser(data.user)
      console.log(data.user)
      const payload = decodeToken(data.access_token);
      if (payload) {
        setUserId(payload.userId);
        setEmail(payload.email);
        setRole(payload.role);
        redirectBasedOnRole(payload.role);
      }
    }
  }, [isSuccess, isPending, isError, error, data, router]);

  const authenticate = (formData: any) => {
    mutate(formData);
  };

  function redirectBasedOnRole(role: string) {
    switch (role) {
      case 'UNIVERSITY_ADMIN':
        router.push('/UniversityAdmin');
        break;
      case 'STUDENT':
        router.push('/student');
        break;
      case 'COMPANY_HR':
        router.push('/company');
        break;
      default:
        router.push('/login');
    }
  }

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

