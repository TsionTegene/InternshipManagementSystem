/* eslint-disable react-hooks/rules-of-hooks */
//import { useStudentSignup, useStudentsFilter } from "@/queries/useStudentQueries";
import { useEffect } from "react";
import { useDepartmentStudents, useFetchAllStudents, useStudentSignup } from "@/queries/useStudentQueries";
import useSessionStore from "@/stores/sessionStore";
import { useStudentStore } from "@/stores/student.store";
import useUserStore from "@/stores/user.store";

const universityId = localStorage.getItem("universityId")
const unID = universityId ?JSON.parse(universityId as string).universityId :null

const dpID = localStorage.getItem("depId")
// const dpID = depId ? :null
// here we define the actions that we can perform on the students data
export const useStudentRegister = () => {
    const setUser = useUserStore((state: any) => state.setUser); // here we get the setUser function from the user store
    const setIsLoading = useUserStore((state: any) => state.setIsLoading); // here we get the setIsLoading function from the user store
    const setError = useUserStore((state: any) => state.setError); // here we get the setError function from the user store
    const userId = useSessionStore((state) => state.userId)

    const user = useUserStore((state: any) => state.user); // here we get the user data from the user store
    const signupStudent = useStudentSignup();
    const studentData = useFetchAllStudents(unID)
    useEffect(() => { // here we use the useEffect hook to fetch the user data from 
        const fetchData = async () => {
            try {
                if (studentData.isSuccess) {
                    setUser(studentData.data);
                }
                if (studentData.isLoading) {
                    setIsLoading(true);
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
                setError(error);
            }
        };

        fetchData();

    }, [studentData.isSuccess, studentData.isPending, setUser, setIsLoading, setError]);

    return {
        user,
        signupStudent,
        isSLoading: signupStudent.isPending,
        isSError: signupStudent.isError,
        isSSuccess: signupStudent.isSuccess,
    };
}

export const useStudentsFetch = (id: string) => {
    const setStudents = useStudentStore((state: any) => state.setStudents);
    const setIsLoading = useStudentStore((state: any) => state.setIsLoading);
    const setError = useStudentStore((state: any) => state.setError);
    const students = useStudentStore((state: any) => state.students);

    // const { user } = useUserStore.getState(); // here we get the user data from the user store
    // const { company, department, university } = user; // here we get the company, department and university data from the user data

    // const fetchStudentsByCompanyId = useStudentsFilter({ company: company.id }); // here we get the students data by company id


}
export const useStudentsFetchByDep = () => {
    const setStudents = useStudentStore((state: any) => state.setStudents);
    const setIsLoading = useStudentStore((state: any) => state.setIsLoading);
    const setError = useStudentStore((state: any) => state.setError);
    const students = useStudentStore((state: any) => state.students);

    const stdData = useDepartmentStudents(dpID as string)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (stdData.isSuccess) {
                    await setStudents(stdData.data);
                }
                if (stdData.isLoading) {
                    setIsLoading(stdData.isLoading);
                }
            } catch (error) {
                console.error("Error fetching university data:", error);
                setError(error);
            }
        };

        fetchData();
    }, [
        stdData.isSuccess,
        setStudents,
        setIsLoading,
        setError,
        students,
    ]);

    return{
        students,

    }

}