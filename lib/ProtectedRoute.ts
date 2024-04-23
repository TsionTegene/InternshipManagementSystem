import { useIsLoggedIn } from "@/hooks/useAuthenticate";
import useSessionStore from "@/stores/sessionStore";
import { useRouter } from "next/navigation";
import decodeToken from '@/lib/decodeToken';
import jwt from 'jsonwebtoken';
import { useEffect } from "react";

const ProtectedRoute = ({ children, roles }: { children: React.ReactNode; roles: string[] }) => {
  const router = useRouter();
  const { role } = useSessionStore(); // zustand sessionStore stores data in the browser, and when on reload 
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("access_token");
    console.log("Token from ProtectedRoute:", token)
    try {
      const decodedtoken = token ? decodeToken(token) : null;
      console.log("Decoded token:", decodedtoken);
      return children;
    } catch (error) {
      console.log("Token validation error:", error);
      router.push('/');
    }
  }
  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   console.log("Token from ProtectedRoute:", token)
  //   try {
  //     const decodedtoken = token ? decodeToken(token) : null;
  //     console.log("Decoded token:", decodedtoken);
  //   } catch (error) {
  //     console.log("Token validation error:", error);
  //     router.push('/');
  //   }
  //   return () => {
  //     children;
  //   };
  // }, [router, children]);
  if (!role || !roles.includes(role)) {
    console.log(role);
    router.push('/');
  }
  return children;

};
export default ProtectedRoute;

interface DecodedToken {
  sub: string;
  email: string;
  role: string;
}