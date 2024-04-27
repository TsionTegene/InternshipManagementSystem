/* eslint-disable react-hooks/rules-of-hooks */
import { createCollege, registerDepartment, registerUniversity, updateCollege, updateDepartment } from "@/api/university/mutation";
import { fetchCollegebyUnId, fetchCountUniversityStaffById, fetchDepartment, fetchUniversity, fetchUniversityById, fetchUniversitybyUserID, } from "@/api/university/queries";
import { useMutation, useQuery } from "@tanstack/react-query";
// using useQuery hook to fetch data from the server
export function useUniversityData() {
    const query = useQuery({
        queryKey: ["university"],
        queryFn: () => fetchUniversity()
    })

    return query;
}


export function useUniversityDataById(id: string) {
    const query = useQuery({
        queryKey: ["university"],
        queryFn: () => fetchUniversityById(id)
    })

    return query;
}
export function usecollegeDatabyUnId(id:any) {
    const query = useQuery({
        queryKey: ["college"],
        queryFn: () => fetchCollegebyUnId(id)
    })

    return query;
}

export const useUniversitySignup = () => {
    const mutation = useMutation({
        mutationKey: ["universityMemeber"],//new 
        mutationFn: (formData: FormData) => registerUniversity(formData),
    })

    return mutation;
};

export const useUnivesityAddDepartment = () => {
    const mutation = useMutation({
       mutationKey:["department"],
        mutationFn: (formData: FormData) => registerDepartment(formData),

    })


    return mutation
}

export const useUnivesityAddCollege = () => {
    const mutation = useMutation({
       mutationKey:["college"],
        mutationFn: (formData: FormData) => createCollege(formData),

    })


    return mutation
}


export const useDepartmentData = (id:string) => {
    const query = useQuery({
        queryKey: ["department"],
        queryFn: () => fetchDepartment(id)
    })
    return query;
}

export const useUpdateCollege = (id:string) => {
    const mutation = useMutation({
       mutationKey:["college"],
        mutationFn: (formData: FormData) => updateCollege(formData,id),

    })


    return mutation
}

export const useUpdatedepartment = (id:string) => {
    const mutation = useMutation({
       mutationKey:["department"],
        mutationFn: (formData: FormData) => updateDepartment(formData,id),

    })


    return mutation
}

export const useCountUniversityStaff = (id: string) => {
    const query = useQuery({
        queryKey: ["staffcounter"],
        queryFn: async () => await  fetchCountUniversityStaffById(id)
    })
    console.log("counter @ query",query.data)
    return query;
}

export const useUserIDtoUniversity = (id: string) => {
    const query = useQuery({
        queryKey: ["university"],
        queryFn: () => fetchUniversitybyUserID(id)
    })
    return query;
}