/* eslint-disable react-hooks/rules-of-hooks */
import { useStudentSignup } from "@/queries/useStudentQueries";
import { useDepartmentData } from "@/queries/useUniversityQueries";
import { userigisteruser } from "@/queries/useUsersdata";
import useUserStore from "@/stores/user.store";
import { useEffect } from "react";

// here we define the actions that we can perform on the students data
export const useStudentRegister = () => {
    const setUser = useUserStore((state: any) => state.setUser); // here we get the setUser function from the user store
    const setIsLoading = useUserStore((state: any) => state.setIsLoading); // here we get the setIsLoading function from the user store
    const setError = useUserStore((state: any) => state.setError); // here we get the setError function from the user store
    const user = useUserStore((state: any) => state.user); // here we get the user data from the user store

    const signupStudent = useStudentSignup(); 

    useEffect(() => { // here we use the useEffect hook to fetch the user data from 
        const fetchData = async () => {
            try {
                if (signupStudent.isSuccess) {
                    setUser(signupStudent.data);
                }
                if (signupStudent.isPending) {
                    setIsLoading(true);
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
                setError(error);
            }
        };

        fetchData();

    }, [signupStudent.isSuccess, signupStudent.isPending, setUser, setIsLoading, setError]);

    return {
        user,
        signupStudent,
    };
}