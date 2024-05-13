import { registerStudent, submiteApplication, submiteReport } from "@/api/student/mutations";
import { countAdvisorStd, countApprovedStd, countToBeApprovedStd, fetchStudentsByCompanyId, fetchStudentsByDepartmentId, fetchStudentsByMentorId, filterInternshipOpp, getAcceptedApplication, getInternshipById, getMyAdvisorandMentor, getStudentByUserId, getStudentsInternship, getSubmittedApplication, unvarifiedstd } from "@/api/student/queries";
import { allStudentsInUniversity } from "@/api/student/queries";
import { advisorStudents } from "@/api/user/queries";
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

export const useAdvisorstudent = (id: string) => {
    const query = useQuery({
        queryKey: ["advisorstudent"],
        queryFn: async () => await advisorStudents(id),
    })
    return query;
}


export const useAdvisorstudentCount = (id: string) => {
    const query = useQuery({
        queryKey: ["countstd"],
        queryFn: async () => await countAdvisorStd (id),
    })
    return query;
}

//student functions
export const useInternshipOppFilter = (id: string) => {
    const query = useQuery({
        queryKey: ["internOpp"],
        queryFn: async () => await filterInternshipOpp(id),
    })
    return query;
}

export const useAcceptedAppFilter = (id: string) => {
    const query = useQuery({
        queryKey: ["application"],
        queryFn: async () => await getAcceptedApplication(id),
    })
    return query;
}

export const useAllApplicationSubmitted = (id: string) => {
    const query = useQuery({
        queryKey: ["application"],
        queryFn: async () => await getSubmittedApplication(id),
    })
    return query;
}

export const useSubmite = () => {

    const mutation = useMutation({
        mutationKey: ["submitapp"],
        mutationFn: (formData: FormData) => submiteApplication(formData),
    })

    return mutation;
};

export const useInternshipByID = (id: string) => {
    const query = useQuery({
        queryKey: ["internship"],
        queryFn: async () => await getInternshipById(id),
    })
    return query;
}

export const useFetchStudentsByAssignedMentor = (id: string) => {
    const query = useQuery({
        queryKey: ["fetchStudentsByAssignedMentor"],
        queryFn: () => fetchStudentsByMentorId(id),
    })
    return query;
}

export const useMyInternship = (id: string) => {
    const query = useQuery({
        queryKey: ["myinternship"],
        queryFn: async () => await getStudentsInternship(id),
    })
    return query;
}

export const useMyAdvisorandMentor = (id: string) => {
    const query = useQuery({
        queryKey: ["mymenandadv"],
        queryFn: async () => await getMyAdvisorandMentor(id),
    })
    return query;
}

export const useSubmiteReport = () => {

    const mutation = useMutation({
        mutationKey: ["submitreport"],
        mutationFn: (formData: FormData) => submiteReport(formData),
    })

    return mutation;
};

export const useStudent = (id: string) => {
    const query = useQuery({
        queryKey: ["getstd"],
        queryFn: async () => await getStudentByUserId(id),
    })
    return query;
}