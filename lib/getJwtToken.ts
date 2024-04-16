export const getJwtToken = (token: string) => {
    if (token === 'accessToken') return localStorage.getItem("accessToken");
    if (token === 'refreshToken') return localStorage.getItem("refreshToken");
}