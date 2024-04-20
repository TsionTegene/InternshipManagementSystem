import { registerStudent } from "@/api/student/mutations";
import { fetchStudentsByCompanyId } from "@/api/student/queries";
import { useMutation, useQuery } from "@tanstack/react-query";


// Mutation to signup student
export const useStudentSignup = () => {
    const mutation = useMutation({
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