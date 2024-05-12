import { useFetchStudentsByAssignedMentor } from "@/queries/useStudentQueries";
import { useFetchMentorQuery } from "@/queries/useUsersdata";
import useStdStore from "@/stores/std.store";
import { useEffect } from "react";

export function useFetchAssignedStudents () {
    const setStudents = useStdStore((state: any) => state.setStudents);
    const setIsLoading = useStdStore((state: any) => state.setIsLoading);
    const setError = useStdStore((state: any) => state.setError);
    const students = useStdStore((state: any) => state.students);
        
    const userId = localStorage.getItem('userId');
    const { data: mentorID } = useFetchMentorQuery(userId as string);
    console.log("Mentor ID: ", mentorID);
    const studentsData = useFetchStudentsByAssignedMentor(mentorID as string);
    console.log("Students Data: ", studentsData.data);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            if (studentsData.isSuccess) {
            setStudents(studentsData.data);
            }
            if (studentsData.isLoading) {
            setIsLoading(studentsData.isLoading);
            }
        } catch (error) {
            console.error("Error fetching College data:", error);
            setError(error);
        }
        };
    
        fetchData();
    }, [studentsData.isSuccess, studentsData.isLoading, setStudents, setIsLoading, setError, studentsData.data]);
    
    return {
        students,
        isLoading: studentsData.isPending,
        error: studentsData.error,
        studentsData,
    }
}