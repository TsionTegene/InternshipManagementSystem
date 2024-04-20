/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useUniversitySignup, useUniversityData, useUnivesityAddDepartment, useUnivesityAddCollege, usecollegeDatabyUnId, useDepartmentData } from '@/queries/useUniversityQueries';
import useUniversityStore from '@/stores/university.store';
import { useAllRoll, useUserRollNull, userigisteruser } from '@/queries/useUsersdata';
import useUserStore from '@/stores/user.store';
import useDepartmentStore from '@/stores/department.store';
import { useCollegeStore } from '@/stores/college.store';
import useRoleStore from '@/stores/role.store';




export const useUniversityActions = () => {
  const setUniversities = useUniversityStore((state: any) => state.setUniversities);
  const setIsLoading = useUniversityStore((state: any) => state.setIsLoading);
  const setError = useUniversityStore((state: any) => state.setError);
  const universities = useUniversityStore((state: any) => state.universities);

  const signupUniversity = useUniversitySignup();
  const universityData = useUniversityData();

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

  }, [universityData.isSuccess, universityData.isLoading, setUniversities, setIsLoading, setError]);

  return {
    universities,
    isLoading: universityData.isLoading,
    error: universityData.error,
    signupUniversity,

  };
};

export const registerUser = () => {
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
export const useNullrole = () =>{
  const setUser = useUserStore((state: any) => state.setUser);
  const setIsLoading = useUserStore((state: any) => state.setIsLoading);
  const setError = useUserStore((state: any) => state.setError);
  const user = useUserStore((state: any) => state.user); 
  const Loading = useUserStore((state: any) => state.isLoading); 
  const Error = useUserStore((state: any) => state.error); 

  const userRolenull = useUserRollNull();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userRolenull.isSuccess) {
          setUser(userRolenull.data); 
 
        }
        if (userRolenull.isLoading) {
          setIsLoading(userRolenull.isLoading);
        }
      } catch (error) {
        console.error('Error fetching university data:', error);
        setError(error);
      }
    };

    fetchData();

  }, [userRolenull.isSuccess, userRolenull.isLoading, setUser, setIsLoading, setError]);

      return {
        user,
        Loading,
        Error
            
      }

}





export const useDepartment = () => {

  const setDepartment = useDepartmentStore((state: any) => state.setDepartments);
  const setIsLoading = useDepartmentStore((state: any) => state.setIsLoading);
  const setError = useDepartmentStore((state: any) => state.setError);
  const departments = useDepartmentStore((state: any) => state.departments);

  const addDepartment = useUnivesityAddDepartment();
  const deptByUnId = useDepartmentData();


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (deptByUnId.isSuccess) {
          setDepartment(deptByUnId.data);

        }
        if (deptByUnId.isLoading) {

          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching university data:', error);
        setError(error);
      }
    };

    fetchData();

  }, [addDepartment.isSuccess, addDepartment.isPending, setDepartment, setIsLoading, setError]);

  return {
    departments,
    addDepartment,
    deptByUnId,
    isLoding: addDepartment.isPending,
    isError: addDepartment.isError

  }


}

export const useCollege = () => {
  const setColleges = useCollegeStore((state: any) => state.setColleges);
  const setIsLoading = useCollegeStore((state: any) => state.setIsLoading);
  const setError = useCollegeStore((state: any) => state.setError);
  const colleges = useCollegeStore((state: any) => state.colleges);

  const addcollege = useUnivesityAddCollege();
  const collegeData = usecollegeDatabyUnId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (collegeData.isSuccess) {
          setColleges(collegeData.data);
        }
        if (collegeData.isLoading) {
          setIsLoading(true);
        }
      } catch (error) {
        console.error('Error fetching College data:', error);
        setError(error);
      }
    };

    fetchData();

  }, [collegeData.isSuccess, collegeData.isLoading, setColleges, setIsLoading, setError]); // Add dependencies here

  return {
    colleges,
    addcollege,
  };

}
export const userole = () =>{
  
  const setRole = useRoleStore((state: any) => state.setRole);
  const IsLoading = useRoleStore((state: any) => state.setIsLoading);
  const IsError = useRoleStore((state: any) => state.setError);
  const roleName = useRoleStore((state: any) => state.roleName); 
  const role_Loading = useRoleStore((state: any) => state.isLoading); 
  const role_error = useRoleStore((state: any) => state.error);

  const Role = useAllRoll()

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Role.isSuccess) {
          setRole(Role.data); 
 
        }
        if (Role.isLoading) {
          IsLoading(Role.isLoading);
        }
      } catch (error) {
        console.error('Error fetching Role data:', error);
        IsError(error);
      }
    };

    fetchData();

  }, [Role.isSuccess, Role.isLoading, setRole, IsLoading, IsError]);

      return {
        roleName,
        role_Loading,
        role_error
            
      }

}

  
  
