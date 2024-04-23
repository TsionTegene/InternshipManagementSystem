"use client"

import jwt from 'jsonwebtoken';

interface DecodedToken {
    sub: string;
    email: string;
    role: string;
}
// Mock function to decode JWT without validation
const decodeJwt = (token: string) => jwt.verify(token, "abel5173") as DecodedToken;  

const refreshToken = async (refreshToken: string) => {
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
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
    return access_token;
};

const decodeToken = async (token: string): Promise<any> => {
    console.log("Token received for decoding:", token);
    try {
        // Assuming jwt.verify throws an error if the token has expired
        const decodedToken = decodeJwt(token);
        console.log("Decoded token:", decodedToken);
        if (decodedToken) {
            return {
                userId: decodedToken.sub,
                email: decodedToken?.email,
                role: decodedToken?.role
            };
        } else {
            throw new Error("Decoded token is null.");
        }
    } catch (error: any) {
        console.log("Token verification failed:", error.message);
        if (error.name === "TokenExpiredError") {
            const refreshTokenValue = localStorage.getItem('refresh_token');
            if (!refreshTokenValue) throw new Error("No refresh token available.");
            const newAccessToken = await refreshToken(refreshTokenValue);
            return decodeToken(newAccessToken); // Recursively decode the new access token
        } else {
            throw error;
        }
    }
};

export default decodeToken;
