/* eslint-disable react-hooks/rules-of-hooks */
//import { useStudentSignup, useStudentsFilter } from "@/queries/useStudentQueries";
import { useEffect } from "react";
import { useAcceptedAppFilter, useAdvisorstudent, useAdvisorstudentCount, useApproveStd, useDepartmentStudents, useFetchAllStudents, useInternshipOppFilter, useStudentSignup, useSubmite } from "@/queries/useStudentQueries";
import useSessionStore from "@/stores/sessionStore";
import { useStudentStore } from "@/stores/student.store";
import useUserStore from "@/stores/user.store";
import { useQueryClient } from "@tanstack/react-query";
import { useApplicationStore } from "@/stores/application.store";
import { useInternshipStore } from "@/stores/internship.store";

const universityId = localStorage.getItem("universityId")
let unID = null;

if (universityId) {
    try {
        const parsedId = JSON.parse(universityId);
        unID = parsedId.universityId; // Make sure the JSON structure has 'universityId' key
    } catch (e) {
        console.error("Error parsing universityId from localStorage:", e);
        // Handle error or fallback here
    }
}
const advID = localStorage.getItem("advisorId")
const stdDepId = localStorage.getItem("stdDepId") 
const stdId = localStorage.getItem("stdId")
const dpID = localStorage.getItem("depId")

// const advID = localStorage.getItem("advisorId")
// const dpID = depId ? :null
// here we define the actions that we can perform on the students data
export const useStudentRegister = () => {
    const setStudents = useStudentStore((state: any) => state.setStudents); // here we get the setUser function from the user store
    const setIsLoading = useStudentStore((state: any) => state.setIsLoading); // here we get the setIsLoading function from the user store
    const setError = useUserStore((state: any) => state.setError); // here we get the setError function from the user store
    // const userId = useSessionStore((state) => state.userId)
    const students = useStudentStore((state: any) => state.students);
    // const user = useUserStore((state: any) => state.user); // here we get the user data from the user store
    const signupStudent = useStudentSignup();
    const studentData = useFetchAllStudents(unID)
    useEffect(() => { // here we use the useEffect hook to fetch the user data from 
        const fetchData = async () => {
            try {
                if (studentData.isSuccess) {
                    setStudents(studentData.data);

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

    }, [studentData.isSuccess, studentData.isPending, setStudents, setIsLoading, setError]);

    return {
        students,
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
export const useStudentsFetchByDep = (id?:string) => {
    const setStudents = useStudentStore((state: any) => state.setStudents);
    const setIsLoading = useStudentStore((state: any) => state.setIsLoading);
    const setError = useStudentStore((state: any) => state.setError);
    const students = useStudentStore((state: any) => state.students);
    const Error = useStudentStore((state: any) => state.error);
    const isLoading = useStudentStore((state: any) => state.isLoading);

    const stdData = useDepartmentStudents( id || dpID as string )
    
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
        isLoading,
        stdData
    ]);

    return{
        students,
        Error,
        isLoading

    }

}

export const useApproveStudents = () => {

    const setStudents = useStudentStore((state: any) => state.setStudents);
    const setIsLoading = useStudentStore((state: any) => state.setIsLoading);
    const setError = useStudentStore((state: any) => state.setError);
    const students = useStudentStore((state: any) => state.students);
    const Error = useStudentStore((state: any) => state.error);
    const isLoading = useStudentStore((state: any) => state.isLoading);

    const stdData = useApproveStd(dpID as string)

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
        isLoading
    ]);

    return {
        students,
        Error,
        isLoading

    }

}

export const useadvisorsStudents = () => {

    const setStudents = useStudentStore((state: any) => state.setStudents);
    const setIsLoading = useStudentStore((state: any) => state.setIsLoading);
    const setError = useStudentStore((state: any) => state.setError);
    const students = useStudentStore((state: any) => state.students);
    const Error = useStudentStore((state: any) => state.error);
    const isLoading = useStudentStore((state: any) => state.isLoading);

    const stdData = useAdvisorstudent(advID as string)
    const totalstd =   useAdvisorstudentCount(advID as string).data
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
        isLoading,
        totalstd
    ]);

    return {
        students,
        Error,
        isLoading,
        totalstd

    }

}

export const useFilterApplication = () => {
    const setApplication = useApplicationStore((state: any) => state.setApplications);
    const isLoading = useApplicationStore((state: any) => state.isLoading);
    const setIsLoading = useApplicationStore((state: any) => state.setIsLoading);
    const application = useApplicationStore((state: any) => state.applications);
    const setError = useApplicationStore((state: any) => state.setError);
    const Error = useApplicationStore((state: any) => state.error);
    const queryClient = useQueryClient();

    const applications = useAcceptedAppFilter(stdId as string)
    const applyapplication = useSubmite()

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (applications.isSuccess) {
                    setApplication(applications.data);
                    console.log("this is std appliations", applications.data);
                    setError(false);
                    setIsLoading(false);

                    // queryClient.invalidateQueries("application");
                } else if (setApplication.isLoading) {
                    setIsLoading(true);
                    // queryClient.invalidateQueries("application");
                } else if (setApplication.isError) {
                    console.log("Error Fetching Department:", setApplication.error);
                    setError(true);
                    // queryClient.invalidateQueries("application");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [

        setApplication,
        setIsLoading,
        setError,
        queryClient,
        
    ]);

    const apply = async (application: any) => {
        try {
            const newApplication= await applyapplication.mutateAsync(
                application
            );

            // queryClient.invalidateQueries("department");

            return newApplication;
        } catch (error) {
            console.error("Error adding new college:", error);
            throw error;
        }
    };
    return {
        apply,
        application,
        isLoading,
        Error,
    };
};

export const useFilterInternship = () => {
    const setInternships = useInternshipStore((state: any) => state.setInternships);
    const isLoading = useInternshipStore((state: any) => state.isLoading);
    const setIsLoading = useInternshipStore((state: any) => state.setIsLoading);
    const internships = useInternshipStore((state: any) => state.internships);
    const setError = useInternshipStore((state: any) => state.setError);
    const Error = useInternshipStore((state: any) => state.error);
    const queryClient = useQueryClient();

    const filterdInternships = useInternshipOppFilter(stdDepId as string)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (filterdInternships.isSuccess) {
                    setInternships(filterdInternships.data);
                    console.log("this is internship opps", filterdInternships.data);
                    setError(false);
                    setIsLoading(false);

                    // queryClient.invalidateQueries("application");
                } else if (filterdInternships.isLoading) {
                    setIsLoading(true);
                    // queryClient.invalidateQueries("application");
                } else if (filterdInternships.isError) {
                    console.log("Error Fetching Department:", setInternships.error);
                    setError(true);
                    // queryClient.invalidateQueries("application");
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [
        filterdInternships.isSuccess,
        setInternships,
        setIsLoading,
        setError,
        queryClient,

    ]);

    return {
        internships,
        isLoading,
        Error,
    };
};