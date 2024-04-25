import { registerStudent } from "@/api/student/mutations";
import { fetchStudentsByCompanyId } from "@/api/student/queries";
import { allStudentsInUniversity } from "@/api/student/queries";
import { Query, useMutation, useQueries, useQuery } from "@tanstack/react-query";


// Mutation to signup student
export const useStudentSignup = () => {
    const mutation = useMutation({
        mutationKey: ["student"],
        mutationFn: (formData: FormData) => registerStudent(formData),
    })

    return mutation;
};

export const useStudentsFilter = (id: string) => {
    const query = useQuery({
        queryKey: ["students"], // this is the key that will be used to cache the data
        queryFn: () => fetchStudentsByCompanyId(id)
    })
}
export const useFetchAllStudents = (id: string) => {
    const query = useQuery({
        queryKey: ["student"],
        queryFn: () => allStudentsInUniversity(id),
    })
    return query;
}