/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useLogin, useRefreshToken } from '@/queries/useLogin';
import useSessionStore from '@/stores/sessionStore';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation'; // Import useRouter

export function isLoggedIn() {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("access_token");
        if (token) {
            if (isTokenExpired(token)) {
                const { mutate, isPending, isSuccess, isError, error } = useRefreshToken();
                const refresh = (token: string) => {
                    mutate(token);
                }
                return { isPending, isSuccess, isError, error, refresh };
            }

            return true;
        }
    }
}

interface DecodedToken {
    sub: string;
    email: string;
    role: string;
}

function isTokenExpired(token: string) {
    try {
        const decodedToken = jwt.verify(token, "abel5173") as DecodedToken;  // Use the secure or default secret
        return false;
    } catch (error) {
        console.log("Token validation error:", error);
        return true; // The token is expired or invalid
    }
}