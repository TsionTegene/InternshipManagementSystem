export const removeJwtToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}