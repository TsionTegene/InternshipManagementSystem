import { registerStudent } from "@/api/student/mutations";
import { countApprovedStd, countToBeApprovedStd, fetchStudentsByCompanyId, fetchStudentsByDepartmentId, unvarifiedstd } from "@/api/student/queries";
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
        queryKey: ["student"], // this is the key that will be used to cache the data
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
export const useDepartmentStudents = (id: string) => {
    const query = useQuery({
        queryKey: ["Vstudent"],
        queryFn: async () => await fetchStudentsByDepartmentId(id),
    })
    return query;
}

export const useApproveStd = (id: string) => {
    const query = useQuery({
        queryKey: ["Nstudent"],
        queryFn: async () => await unvarifiedstd(id),
    })
    return query;
}


export const useCountApprovedStd = (id: string) => {
    const query = useQuery({
        queryKey: ["castudent"],
        queryFn: async () => await countApprovedStd(id),
    })
    return query;
}

export const useCountToBeApprovedStd = (id: string) => {
    const query = useQuery({
        queryKey: ["cistudent"],
        queryFn: async () => await countToBeApprovedStd(id),
    })
    return query;
}