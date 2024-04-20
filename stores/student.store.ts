import { create } from 'zustand'

interface StudentState {
    students: any[];
    isLoading: boolean;
    error: any;
    setStudents: (students: any[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: any) => void;
}

interface StudentFilter {
    companyId: string;
    departmentId: string;
    universityId: string;
}

export const useStudentStore = create<StudentState>((set) => ({
    students: [],
    isLoading: false,
    error: null,
    setStudents: (students) => set(() => ({ students })),
    setIsLoading: (isLoading) => set(() => ({ isLoading })),
    setError: (error) => set(() => ({ error })),
}))

