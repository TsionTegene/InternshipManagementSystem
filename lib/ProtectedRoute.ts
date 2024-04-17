import useSessionStore from "@/stores/sessionStore";
import { redirect } from "next/navigation";
import router, { useRouter } from "next/router";

const ProtectedRoute = ({ children, roles }: { children: React.ReactNode, roles: string[] }) => {
    // Your code here
    // Error: NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted
    // To handle this error we need to use the useRouter hook from next/router instead of importing the router object directly from next/router.
    // const route = useRouter();
    // Here is the corrected code:
    // const router = useRouter();
    const { role } = useSessionStore();

    if (!role || !roles.includes(role)) {
        return redirect('/login');
    }

    return children;
};

export default ProtectedRoute;
