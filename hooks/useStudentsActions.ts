/* eslint-disable react-hooks/rules-of-hooks */
import { useStudentSignup } from "@/queries/useStudentQueries";
import { userigisteruser } from "@/queries/useUsersdata";
import useUserStore from "@/stores/user.store";
import { useEffect } from "react";

// here we define the actions that we can perform on the students data
export const useStudentRegister = () => {
    const setUser = useUserStore((state: any) => state.setUser); // here we get the setUser function from the user store
    const setIsLoading = useUserStore((state: any) => state.setIsLoading); // here we get the setIsLoading function from the user store
    const setError = useUserStore((state: any) => state.setError); // here we get the setError function from the user store
    const user = useUserStore((state: any) => state.user); // here we get the user data from the user store

    const register_user = useStudentSignup(); 

    // useEffect(() => { // here we use the useEffect hook to fetch the user data from 
    //     const fetchData = async () => {
    //         try {
    //             if (register_user.isSuccess) {
    //                 setUser(register_user.data);
    //             }
    //             if (register_user.isPending) {
    //                 setIsLoading(true);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching university data:', error);
    //             setError(error);
    //         }
    //     };

    //     fetchData();

    // }, [register_user.isSuccess, register_user.isPending, setUser, setIsLoading, setError]);

    return {
        user,
    };
}