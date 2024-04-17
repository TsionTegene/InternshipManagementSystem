// This is a middleware function that checks the session state and redirects the user to the login page if they are not authenticated. We are using the useSessionStore hook to access the session state and check if the user is authenticated. If the user is not authenticated, we redirect them to the login page using the useHistory hook from react-router-dom. This middleware function can be used in any component that requires authentication.

import { NextApiRequest, NextApiResponse } from "next";
import { getJwtToken } from "./lib";

export default async function middleware(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (typeof window !== 'undefined') {// Check if we are in the browser
            const token = localStorage.getItem("accessToken");
            if (token) {
                req.headers.authorization = `Bearer ${token}`;
            }
        }
    } catch (error) {
        if (typeof window !== 'undefined') {
            if ((error as any).status === 401) {
                try {
                    const refreshTokenValue = getJwtToken("refreshToken")
                    const response: Response = await fetch('/api/refresh', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: refreshTokenValue,
                    });
    
                    const data = await response.json();
                    const { accessToken, refreshToken } = data;
    
                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    // Retry the original request with the new access token
                    req.headers.authorization = `Bearer ${accessToken}`;
                    return middleware(req, res); // Recursively call the middleware
                } catch (error) {
                    // Handle refresh token error
                    return res.status(401).json({ message: 'Unauthorized' });
                }
            } else {
                // Handle other errors
                throw error;
            }
        }
    }
}