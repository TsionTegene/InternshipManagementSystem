import { useEffect } from 'react';
import { useUniversitySignup, useUniversityData, useUnivesityAddCollage } from '@/queries/useUniversityQueries';
import useUniversityStore from '@/stores/university.store';
import { userigisteruser } from '@/queries/useUsersdata';
import useUserStore from '@/stores/user.store';

export const useUniversityActions = () => {
  const setUniversities = useUniversityStore((state: any) => state.setUniversities);
  const setIsLoading = useUniversityStore((state: any) => state.setIsLoading);
  const setError = useUniversityStore((state: any) => state.setError);
  const universities = useUniversityStore((state: any) => state.universities); 

  const signupUniversity = useUniversitySignup();
  const universityData = useUniversityData();
  const addCollage = useUnivesityAddCollage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (universityData.isSuccess) {
          setUniversities(universityData.data); 
 
        }
        if (universityData.isLoading) {
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching university data:', error);
        setError(error);
      }
    };

    fetchData();

  }, [universityData.isSuccess, universityData.isLoading, setUniversities, setIsLoading, setError]);

  return {
    universities,
    isLoading: universityData.isLoading,
    error: universityData.error, 
    signupUniversity,
    addCollage,
  };
};

export const registerUser = () =>{
  const setUser = useUserStore((state: any) => state.setUser);
  const setIsLoading = useUserStore((state: any) => state.setIsLoading);
  const setError = useUserStore((state: any) => state.setError);
  const user = useUserStore((state: any) => state.user); 

  const register_user = userigisteruser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (register_user.isSuccess) {
          setUser(register_user.data); 
 
        }
        if (register_user.isPending) {
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching university data:', error);
        setError(error);
      }
    };

    fetchData();

  }, [register_user.isSuccess, register_user.isPending, setUser, setIsLoading, setError]);

      return {
        user,
        register_user

        
      }

}