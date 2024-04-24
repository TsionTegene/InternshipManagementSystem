// /* eslint-disable react-hooks/rules-of-hooks */
// import { useIsLoggedIn } from "@/hooks/useAuthenticate";
// import { useRouter } from "next/navigation";
// import decodeToken from '@/lib/decodeToken';
// import jwt from 'jsonwebtoken';
// import { useEffect, useState } from "react";
// import { IsAuthenticated } from "./IsAuthenticated";

// const ProtectedRoute = ({ children, roles }: { children: React.ReactNode; roles: string[] }) => {
//   const router = useRouter();
//   const [Role, setRole] = useState<string>("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Use state to manage authentication status

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setRole(localStorage.getItem("role") || ""); // Provide a default value for the role state variable
//       const token = localStorage.getItem("access_token");
//       IsAuthenticated().then(isAuthenticated => {
//         console.log("IsAuthenticated: ", isAuthenticated)
//         setIsAuthenticated(isAuthenticated || false); // Provide a default value of false if isAuthenticated is undefined
//       }).catch(error => {
//         console.error("Error in IsAuthenticated:", error)
//         router.push('/login');
//       });
//     }
//   }, [])

//   // Render children only if authenticated and role matches
//   return isAuthenticated && roles.includes(Role) ? {children} : router.push('/login');
// };

// export default ProtectedRoute;
