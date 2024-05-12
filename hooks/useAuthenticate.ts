"use client";

import { useEffect, useState } from 'react';
import { useLogin, useRefreshToken } from '@/queries/useLogin';
import useSessionStore from '@/stores/sessionStore';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation'; // Import useRouter
import { isLoggedIn } from '@/lib/isLoggedIn';
import router from 'next/router';
import decodeToken from '@/lib/decodeToken';
import { useUserIDtoUniversity } from '@/queries/useUniversityQueries';
import useDepartmentStore from '@/stores/department.store';

export const useAuthenticate = () => {
  const { data, mutate, isSuccess, isError, isPending, error } = useLogin();
  const [userId, setUserid] = useState<string>('');
  const setUserId = useSessionStore((state) => state.setUserId);
  const setToken = useSessionStore((state) => state.setToken)
  const setUser = useSessionStore((state) => state.setUser)
  const setEmail = useSessionStore((state) => state.setEmail);
  const setRole = useSessionStore((state) => state.setRole);
  const setIsError = useSessionStore((state) => state.setIsError);
  const setIsLoading = useSessionStore((state) => state.setIsLoading);
  const router = useRouter(); // Get router instance
  const setDepId = useDepartmentStore((state:any) => state.setDepartmentId)
  useEffect(() => {
    if (isError && error) {
      setIsError(error);
      setIsLoading(false);
      return;
    }
    if (isSuccess) {
      console.log("isSuccess: ", isSuccess)
      console.log(data)
      setUser(data.user)
      console.log(data.user)
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('userId', data.user.id);
        if(data.unId){
          console.log(data.unId)
          localStorage.setItem('universityId', JSON.stringify(data.unId[0]))
        }
        if(data.dpId){
          console.log(data.dpId)
          localStorage.setItem('depId', data.dpId)
        }
        if (data.advId) {
          console.log(data.advId)
          localStorage.setItem('advisorId', data.advId)
        }
        if (data.stdDepId) {
          console.log(data.stdDepId)
          localStorage.setItem('stdDepId', data.stdDepId)
        }
        if (data.stdId) {
          console.log(data.stdId)
          localStorage.setItem('stdId', data.stdId)
        }
        if (data.stdFlag) {
          console.log(data.stdFlag)
          localStorage.setItem('stdFlag', data.stdFlag)
        }
        console.log("Access token:", data.access_token);
        console.log("Refresh token:", data.refresh_token);
        const payload = decodeToken(data.access_token).then(payload => {
          console.log("Decoded token:", payload);

          // Accessing properties
          console.log("Email:", payload.email);
          console.log("Role:", payload.role);
          console.log("User ID:", payload.userId);
          setUserid(payload.userId);
          // Assuming you have functions to handle these values
          setEmail(payload.email);
          setRole(payload.role);
          localStorage.setItem('role', payload.role);
          setUserId(payload.userId);
          redirectBasedOnRole(payload.role);
        }).catch(error => {
          console.error("Error decoding token:", error);
        });
      }
    }
    if (isPending) {
      setIsLoading(true);
      console.log(isPending)
      return;
    }

  }, [error, isError, isPending, isSuccess, router, setIsError, setIsLoading]);

  const authenticate = (formData: any) => {
    mutate(formData)
    // console.log("Form values to be sent: ", formData)  
  }

  function redirectBasedOnRole(role: string) {
    switch (role) {
      case 'UNIVERSITY_ADMIN':
        router.push('/UniversityAdmin');
        break;
      case 'STUDENT':
        router.push('/student');
        break;
      case 'COMPANY_HR':
        router.push('/hr');
        break;
      case 'DEPARTMENT_HEAD':
        router.push('/departmenthead');
        break;
      case 'ADVISOR':
        router.push('/advisor');
        break;
      default:
        router.push('/login');
    }
  }

  return { authenticate, isPending, isSuccess, isError, error };
};

export const useIsLoggedIn = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return true;
  }

  return false;
}

interface DecodedToken {
  sub: string;
  email: string;
  role: string;
}

function isTokenExpired(token: string) {
  try {
    const decodedToken = jwt.verify(token, "abel5173") as DecodedToken;  // Use the secure or default secret
    console.log("Decoded token:", decodedToken);
    return false;
  } catch (error) {
    console.log("Token validation error:", error);
    return true; // The token is expired or invalid
  }
}
