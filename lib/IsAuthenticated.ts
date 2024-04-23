import jwt from 'jsonwebtoken';

interface DecodedToken {
    sub: string;
    email: string;
    role: string;
}
export const IsAuthenticated = async (role: string): Promise<boolean | undefined> => {
    try {
        const access_token = localStorage.getItem("access_token");
        const Role = localStorage.getItem("role");
        if (access_token === null) {
            return false;
        }
        const decodeJwt = jwt.verify(access_token, "abel5173");
        if (role === Role) {
            return true;
        }
        return false;
    } catch (error: any) {
        console.log("Token verification failed:", error.message);
        const access_token = localStorage.getItem("access_token");
        if (access_token === null) {
            return false
        } else {
            if (typeof window !== 'undefined') {
                const RefreshToken = localStorage.getItem('refresh_token');
                if (RefreshToken === null) {
                    return false
                }
                try {
                    const newToken = await refreshToken(RefreshToken);
                    const decodeJwt = jwt.verify(newToken, "abel5173") as DecodedToken;
                    return true
                } catch (error: any) {
                    console.log("Token verification failed:", error.message);
                    return false
                }
            }
        }
    }
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
