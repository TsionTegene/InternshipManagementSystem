import { registerStudent } from "@/api/student/mutations";
import { useMutation } from "@tanstack/react-query";


// Mutation to signup student
export const useStudentSignup = () => {
    const mutation = useMutation({
        mutationFn: (formData: FormData) => registerStudent(formData),
    })

    return mutation;
};