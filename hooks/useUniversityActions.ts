/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useUniversitySignup, useUniversityData, useUnivesityAddDepartment, useUnivesityAddCollege, usecollegeDatabyUnId, useDepartmentData, useUpdateCollege, useUpdatedepartment } from '@/queries/useUniversityQueries';
import useUniversityStore from '@/stores/university.store';
import { useAllRoll, useUserRollNull, userigisteruser } from '@/queries/useUsersdata';
import useUserStore from '@/stores/user.store';
import useDepartmentStore from '@/stores/department.store';
import { useCollegeStore } from '@/stores/college.store';
import useRoleStore from '@/stores/role.store';
import useSessionStore from "@/stores/sessionStore"
import { useQueryClient } from '@tanstack/react-query';
import { updateDepartment } from '@/api/university/mutation';

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
  const universityId = useSessionStore((state: any) => state.userId)

  const setDepartment = useDepartmentStore((state: any) => state.setDepartments);
  const setIsLoading = useDepartmentStore((state: any) => state.setIsLoading);
  const setError = useDepartmentStore((state: any) => state.setError);
  const departments = useDepartmentStore((state: any) => state.departments);
  const queryClient = useQueryClient(); // Access the query client instance
  const isLoading = useCollegeStore((state: any) => state.isLoading);
  const Error = useCollegeStore((state: any) => state.error);
  const setDepartmentId =useDepartmentStore((state: any) => state.setDepartmentId)
  const departmentId =useDepartmentStore((state: any) => state.departmentId)
  
  const updateDepartmet = useUpdatedepartment(departmentId)
  const addDepartmentMutation = useUnivesityAddDepartment();
  const deptByUnId = useDepartmentData('661fbd258ccc2c339bc90202');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (deptByUnId.isSuccess) {
          setDepartment(deptByUnId.data);
          console.log("Dapartment fetched successfully")

        }
        if (deptByUnId.isLoading) {

          setIsLoading(true);
        }
        if(deptByUnId.isError){
          console.log("Error Fetching Department")
        }
      } catch (error) {
        console.error('Error fetching university data:', error);
        setError(error);
      }
    };

    fetchData();

  }, [deptByUnId.isSuccess, deptByUnId.isPending, setDepartment, setIsLoading, setError,queryClient,updateDepartmet]);


const addDepartment = async (collegeData: any) => {
  try {
    const newDepartment = await addDepartmentMutation.mutateAsync(collegeData);

    queryClient.invalidateQueries("department"); 

    return newDepartment;
  } catch (error) {
    console.error('Error adding new college:', error);
    throw error;
  }
};

const  newDepartmentId = async (id:any)=>{

  await  setDepartmentId(id)

 }

 const updateDepartmentById = async (departmentData: any) => {
  try {
    const newdepartment = await updateDepartmet.mutateAsync(departmentData);

    
    queryClient.invalidateQueries("department"); 

    return newdepartment;
  } catch (error) {
    console.error('Error Updating new college:', error);
    throw error;
  }
};
  return {
    departments,
    addDepartment,
    newDepartmentId,
    updateDepartmentById,
    deptByUnId,
    departmentId,
    isLoading ,
    Error 

  }


}

export const useCollege = () => {
  const universityId = useSessionStore((state: any) => state.userId);
  const setColleges = useCollegeStore((state: any) => state.setColleges);
  const setIsLoading = useCollegeStore((state: any) => state.setIsLoading);
  const setError = useCollegeStore((state: any) => state.setError);
  const colleges = useCollegeStore((state: any) => state.colleges);
  const isLoading = useCollegeStore((state: any) => state.isLoading);
  const Error = useCollegeStore((state: any) => state.error);
  const collegeId = useCollegeStore((state: any) => state.collegeId);
  const setCollegeId = useCollegeStore((state: any) => state.setCollegeId);

  const addCollegeMutation = useUnivesityAddCollege();
  const updateCollege = useUpdateCollege(collegeId)
  const collegeData = usecollegeDatabyUnId("661fbd258ccc2c339bc90202");
  const queryClient = useQueryClient(); // Access the query client instance

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (collegeData.isSuccess) {
          setColleges(collegeData.data);
        }
        if (collegeData.isLoading) {
          setIsLoading(collegeData.isLoading);
        }
      } catch (error) {
        console.error('Error fetching College data:', error);
        setError(error);
      }
    };

    fetchData();
  }, [collegeData.isSuccess, collegeData.isLoading, setColleges, setIsLoading, setError,queryClient,updateCollege,setCollegeId]);

  const addCollege = async (collegeData: any) => {
    try {
      const newCollege = await addCollegeMutation.mutateAsync(collegeData);
      queryClient.invalidateQueries("college"); // Assuming the query key is 'colleges'

      return newCollege;
    } catch (error) {
      console.error('Error adding new college:', error);
      throw error;
    }
  };

  const updateCollegeById = async (collegeData: any) => {
    try {
      const newCollege = await updateCollege.mutateAsync(collegeData);      
      queryClient.invalidateQueries("college"); 
      return newCollege;
    } catch (error) {
      console.error('Error Updating new college:', error);
      throw error;
    }
  };

 const  newCollegeId = async (id:any)=>{

  await  setCollegeId(id)

 }
  

  return {
    colleges: colleges || [],
    addCollege,
    updateCollegeById,
    newCollegeId,
    collegeId,
    isLoading,
    Error
  };
};
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

  
  
