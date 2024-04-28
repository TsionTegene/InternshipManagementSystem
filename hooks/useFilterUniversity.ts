/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useId } from 'react';
import { useUniversitySignup, useUniversityData, useUnivesityAddDepartment, useUnivesityAddCollege, usecollegeDatabyUnId, useDepartmentData, useUpdateCollege, useUpdatedepartment, useUniversityDataById, useCountUniversityStaff, useUserIDtoUniversity } from '@/queries/useUniversityQueries';
import useUniversityStore from '@/stores/university.store';
import useUserStore from '@/stores/user.store';
import useSessionStore from "@/stores/sessionStore"
import { useQueryClient } from '@tanstack/react-query';
import { useDepartment } from './useUniversityActions';

const universityId = localStorage.getItem("universityId")
const unID = JSON.parse(universityId as string).universityId

export const useUniversityActions = () => {


    const setUniversities = useUniversityStore((state: any) => state.setUniversities);
    const setIsLoading = useUniversityStore((state: any) => state.setIsLoading);
    const setError = useUniversityStore((state: any) => state.setError);
    const universities = useUniversityStore((state: any) => state.universities);
    const universityData = useUniversityData();
    
    useEffect(() => {


    }, [])
    const UniversityCount = useCountUniversityStaff(unID)
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (universityData.isSuccess) {
                    setUniversities(universityData.data);
                }
                if (universityData.isLoading) {
                    setIsLoading(universityData.isLoading);
                }
            } catch (error) {
                console.error('Error fetching university data:', error);
                setError(error);
            }
        };

        fetchData();

    }, [universityData.isSuccess, universityData.isLoading, setUniversities, setIsLoading, setError, universityData]);

    return {
        universities: universities,//new 
        isLoading: universityData.isLoading,
        error: universityData.error,

    };
};

export const department=() =>  {
    const {departments} = useDepartment()
    

}