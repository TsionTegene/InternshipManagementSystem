import { login } from "@/api/login";

export const authenticate = async (data: any) {
    if(data instanceof FormData) {
        const response = await login(data);
        
    }
}