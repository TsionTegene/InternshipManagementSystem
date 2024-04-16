import useSessionStore from "@/stores/sessionStore";
import router, { useRouter } from "next/router";

const ProtectedRoute = ({ children, roles }: { children: React.ReactNode, roles: string[] }) => {
    // Your code here
    const route = useRouter();
    const { role } = useSessionStore();

    if (!role || !roles.includes(role)) {
        router.push("/login");
        return null;
    }

    return children;
};

export default ProtectedRoute;
