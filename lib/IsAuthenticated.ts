/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import useSessionStore from '@/stores/sessionStore';
import jwt from 'jsonwebtoken';

interface DecodedToken {
    sub: string;
    email: string;
    role: string;
}

export async function IsAuthenticated(role: string) {
    console.log("Checking authentication...")
    // if (typeof window === 'undefined') {
    try {
        console.log("Reload in progress...")
        const access_token = localStorage.getItem("access_token");
        console.log("Access token null from the first call: ", access_token);

        const Role = localStorage.getItem("role");
        if (access_token === null) {
            return false;
        }
        const decodeJwt = jwt.verify(access_token, "abel5173");
        if (role === Role) {
            return true;
        }
        console.log("User loged in");
        return true;
    } catch (error: any) {
        console.log("Token verification failed might be expired:", error.message);
        const access_token = localStorage.getItem("access_token");
        console.log("Refersh token null");
        if (access_token === null) {
            console.log("Access token null");
            return false
        } else {
            const RefreshToken = localStorage.getItem('refresh_token');
            if (RefreshToken === null) {
                console.log("Refersh token null");
                return false
            }
            try {
                const newToken = await refreshToken(RefreshToken);
                localStorage.setItem("access_token", newToken.access_token)
                localStorage.setItem("refresh_token", newToken.refresh_token);
                const decodeJwt = jwt.verify(newToken, "abel5173") as DecodedToken;
                console.log(localStorage.getItem('user'))
                localStorage.setItem('role', decodeJwt.role);
                return true
            } catch (error: any) {
                console.log("Token verification failed:", error.message);
                return false
            }
        }
    }
    // }
}

export const refreshToken = async (refreshToken: string) => {
    const url = 'http://localhost:5000/auth/refresh';
    // const url = 'https://web-based-internship-management-system-5.onrender.com/auth/refresh';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refreshToken}`,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { access_token, refresh_token } = await response.json();
    console.log("New Token: ", access_token, refresh_token)
    if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
    }
    return access_token;
};
