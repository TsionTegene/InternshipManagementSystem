/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect} from 'react';
import { useUniversitySignup, useUniversityData, useUnivesityAddDepartment, useUnivesityAddCollege, usecollegeDatabyUnId, useDepartmentData, useUpdateCollege, useUpdatedepartment, useUniversityDataById, useCountUniversityStaff, useUserIDtoUniversity, useAddAdvisor } from '@/queries/useUniversityQueries';
import useUniversityStore from '@/stores/university.store';
import { useAllRoll, useAllUniversityMembers, useDeptAdvisorData, useUpdatedUser, useUserRollNull, userigisteruser } from '@/queries/useUsersdata';
import useUserStore from '@/stores/user.store';
import useDepartmentStore from '@/stores/department.store';
import { useCollegeStore } from '@/stores/college.store';
import useRoleStore from '@/stores/role.store';
import useSessionStore from "@/stores/sessionStore"
import { useQueryClient } from '@tanstack/react-query';
import useItemStore from '@/stores/selectedItem';


const universityId = localStorage.getItem("universityId")
let unID = null;

if (universityId) {
  try {
    const parsedId = JSON.parse(universityId);
    unID = parsedId.universityId; // Make sure the JSON structure has 'universityId' key
  } catch (e) {
    console.error("Error parsing universityId from localStorage:", e);
    // Handle error or fallback here
  }
}

const dpID = localStorage.getItem("depId")

export const useUniversityFetch = () => {
  const setUniversities = useUniversityStore(
    (state: any) => state.setUniversities
  );
  const setIsLoading = useUniversityStore((state: any) => state.setIsLoading);
  const setError = useUniversityStore((state: any) => state.setError);
  const universities = useUniversityStore((state: any) => state.universities);
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
        console.error("Error fetching university data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [
    universityData.isSuccess,
    universityData.isLoading,
    universities,
    setUniversities,
    setIsLoading,
    setError,
    universityData,
  ]);
  return {
    universities,
    isLoading: universityData.isLoading,
    error: universityData.error,
  };
}

export const useUniversityActions = () => {

  const userId = useSessionStore((state) => state.userId);

  // const unId = useUserIDtoUniversity(userId as string).data

  const queryClient = useQueryClient(); // Access the query client instance
  const setUniversities = useUniversityStore(
    (state: any) => state.setUniversities
  );
  const setIsLoading = useUniversityStore((state: any) => state.setIsLoading);
  const setError = useUniversityStore((state: any) => state.setError);
  const universities = useUniversityStore((state: any) => state.universities);
  const selectedUserID = useUserStore((state: any) => state.selectedUserID);
  const setselectedUserID = useUserStore(
    (state: any) => state.setSelectedUserID
  );
  const count = useUniversityStore((state: any) => state.count);
  const setCount = useUniversityStore((state: any) => state.setCount);
  const signupUniversity = useUniversitySignup();
  const universityData = useUniversityData();
  const univesrityId = useSessionStore((state) => state.universityID);
  const universityById = useUniversityDataById(selectedUserID);

  const UniversityCount = useCountUniversityStaff(unID);
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
        console.error("Error fetching university data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [
    universityData.isSuccess,
    universityData.isLoading,
    universities,
    setUniversities,
    setIsLoading,
    setError,
    universityData,
  ]);
  const selectedUniverity = async (id: any) => {
    await setselectedUserID(id);
    queryClient.invalidateQueries("university");
  };

  try {
    if (UniversityCount.isSuccess) {
      setCount(UniversityCount.data);
      console.log("count at the hook", UniversityCount.data);
    }
  } catch (error) {
    console.error("Error fetching university data:", error);
  }
  return {
    universities,
    isLoading: universityData.isLoading,
    error: universityData.error,
    signupUniversity,
    selectedUniverity,
    universityById,
    count,
  };
};

export const registerUser = () => {
  const setUser = useUserStore((state: any) => state.setUser);
  const setIsLoading = useUserStore((state: any) => state.setIsLoading);
  const setError = useUserStore((state: any) => state.setError);
  const user = useUserStore((state: any) => state.user);
  const selectedUserID = useUserStore((state: any) => state.selectedUserID);
  const setselectedUserID = useUserStore(
    (state: any) => state.setSelectedUserID
  );
  const queryClient = useQueryClient(); // Access the query client instance

  const univesrityId = useSessionStore((state) => state.universityID);

  const register_user = userigisteruser(unID);
  const staff = useAllUniversityMembers(unID);
  const updateuserById = useUpdatedUser(selectedUserID);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (staff.isSuccess) {
          setUser(staff.data);
        }
        if (staff.isLoading) {
          setIsLoading(true);
        }
      } catch (error) {
        console.error("Error creating User data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [
    register_user.isSuccess,
    staff.isSuccess,
    staff.isLoading,
    setUser,
    setIsLoading,
    setError,
    queryClient,
    updateuserById,
  ]);

  const addUser = async (userData: any) => {
    try {
      const newUser = await register_user.mutateAsync(userData);

      queryClient.invalidateQueries("universityMemeber");

      return newUser;
    } catch (error) {
      console.error("Error adding new college:", error);
      throw error;
    }
  };

  const selecteduser = async (id: any) => {
    await setselectedUserID(id);
    queryClient.invalidateQueries("universityMemeber");
  };
  //@ts-ignore
  const updateUser = (updatedData) => {
    updateuserById.mutateAsync(updatedData);
  };
  console.log("Univesity ID ", univesrityId);

  return {
    user,
    addUser, //[][][][]it must be changed to make it real time update [][][][]
    selecteduser,
    updateUser,
  };
};
export const useNullrole = () => {
  const setUser = useUserStore((state: any) => state.setUser);
  const setIsLoading = useUserStore((state: any) => state.setIsLoading);
  const setError = useUserStore((state: any) => state.setError);
  const user = useUserStore((state: any) => state.user);
  const Loading = useUserStore((state: any) => state.isLoading);
  const Error = useUserStore((state: any) => state.error);

  // const univesrityId = useSessionStore((state) => state.universityID)

  const userRolenull = useUserRollNull(unID);

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
        console.error("Error fetching university data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [
    userRolenull.isSuccess,
    userRolenull.isLoading,
    setUser,
    setIsLoading,
    setError,
  ]);

  return {
    user,
    Loading,
    Error,
  };
};


export const useFilterDepartment = () => {
  const setDepartment = useDepartmentStore((state: any) => state.setDepartments);
  const isLoading = useDepartmentStore((state: any) => state.isLoading);
  const setIsLoading = useDepartmentStore((state: any) => state.setIsLoading);
  const departments = useDepartmentStore((state: any) => state.departments);
  const setError = useDepartmentStore((state: any) => state.setError);
  const Error = useDepartmentStore((state: any) => state.error);
  const queryClient = useQueryClient(); // Access the query client instance
  const selectedItemID = useItemStore((state: any) => state.selectedItemID);
  const setselectedItemID = useItemStore(
    (state: any) => state.setSelectedItemID
  );

  const departmentData = useDepartmentData(selectedItemID);
  console.log("un dep", departmentData.data)

  setDepartment(departmentData.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (departmentData.isSuccess) {
          setDepartment(departmentData.data);
          console.log("this is deps in UnId", departmentData.data);
          setError(false);
          setIsLoading(false);

          queryClient.invalidateQueries("departmentfilter");
        } else if (departmentData.isLoading) {
          setIsLoading(true);
          queryClient.invalidateQueries("departmentfilter");
        } else if (departmentData.isError) {
          console.log("Error Fetching Department:", departmentData.error);
          setError(true);
          queryClient.invalidateQueries("departmentfilter");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [
    
    setDepartment,
    setIsLoading,
    setError,
    queryClient,
    selectedItemID
  ]);

  return {
    departmentData,
    departments,
    isLoading,
    Error,
  };
};


export const useDepartment = () => {
  const setDepartment = useDepartmentStore(
    (state: any) => state.setDepartments
  );
  const setIsLoading = useDepartmentStore((state: any) => state.setIsLoading);
  const setError = useDepartmentStore((state: any) => state.setError);
  const departments = useDepartmentStore((state: any) => state.departments);
  const queryClient = useQueryClient(); // Access the query client instance
  const isLoading = useCollegeStore((state: any) => state.isLoading);
  const Error = useCollegeStore((state: any) => state.error);
  const setDepartmentId = useDepartmentStore(
    (state: any) => state.setDepartmentId
  );
  const departmentId = useDepartmentStore((state: any) => state.departmentId);

  const univesrityId = useSessionStore((state) => state.universityID);

  const updateDepartmet = useUpdatedepartment(departmentId);
  const addDepartmentMutation = useUnivesityAddDepartment();
  const deptByUnId = useDepartmentData(unID);

  // const filterDepartment = (id: string) => {
  //   console.log("the value is ", id);
  //   const data = useDepartmentData(id);

  //   if (data.isSuccess) {
  //     setDepartment(data.data);
  //     console.log("this is deps in UnId",data.data)
  //   }
  //   if (data.isLoading) {
  //     setIsLoading(true);
  //   }
  //   if (data.isError) {
  //     console.log("Error Fetching Department");
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (deptByUnId.isSuccess) {
          setDepartment(deptByUnId.data);
          console.log("Dapartment fetched successfully");
        }
        if (deptByUnId.isLoading) {
          setIsLoading(true);
        }
        if (deptByUnId.isError) {
          console.log("Error Fetching Department");
        }
      } catch (error) {
        console.error("Error fetching university data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [
    deptByUnId.isSuccess,
    deptByUnId.isPending,
    setDepartment,
    setIsLoading,
    setError,
    queryClient,
    updateDepartmet,
  ]);

  const addDepartment = async (collegeData: any) => {
    try {
      const newDepartment = await addDepartmentMutation.mutateAsync(
        collegeData
      );

      queryClient.invalidateQueries("department");

      return newDepartment;
    } catch (error) {
      console.error("Error adding new college:", error);
      throw error;
    }
  };

  const newDepartmentId = async (id: any) => {
    await setDepartmentId(id);
  };

  const updateDepartmentById = async (departmentData: any) => {
    try {
      const newdepartment = await updateDepartmet.mutateAsync(departmentData);

      queryClient.invalidateQueries("department");

      return newdepartment;
    } catch (error) {
      console.error("Error Updating new college:", error);
      throw error;
    }
  };
  return {
    departments,
    addDepartment,
    newDepartmentId,
    updateDepartmentById,
    // filterDepartment,
    deptByUnId,
    departmentId,
    isLoading,
    Error,
  };
};

export const useCollege = () => {
  const setColleges = useCollegeStore((state: any) => state.setColleges);
  const setIsLoading = useCollegeStore((state: any) => state.setIsLoading);
  const setError = useCollegeStore((state: any) => state.setError);
  const colleges = useCollegeStore((state: any) => state.colleges);
  const isLoading = useCollegeStore((state: any) => state.isLoading);
  const Error = useCollegeStore((state: any) => state.error);
  const collegeId = useCollegeStore((state: any) => state.collegeId);
  const setCollegeId = useCollegeStore((state: any) => state.setCollegeId);

  // const univesrityId = useSessionStore((state) => state.universityID)

  const addCollegeMutation = useUnivesityAddCollege();
  const updateCollege = useUpdateCollege(collegeId);
  const collegeData = usecollegeDatabyUnId(unID);
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
        console.error("Error fetching College data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [
    collegeData.isSuccess,
    collegeData.isLoading,
    setColleges,
    setIsLoading,
    setError,
    queryClient,
    updateCollege,
    setCollegeId,
  ]);

  const addCollege = async (collegeData: any) => {
    try {
      const newCollege = await addCollegeMutation.mutateAsync(collegeData);
      queryClient.invalidateQueries("college"); // Assuming the query key is 'colleges'

      return newCollege;
    } catch (error) {
      console.error("Error adding new college:", error);
      throw error;
    }
  };

  const updateCollegeById = async (collegeData: any) => {
    try {
      const newCollege = await updateCollege.mutateAsync(collegeData);
      queryClient.invalidateQueries("college");
      return newCollege;
    } catch (error) {
      console.error("Error Updating new college:", error);
      throw error;
    }
  };

  const newCollegeId = async (id: any) => {
    await setCollegeId(id);
  };

  return {
    colleges: colleges || [],
    addCollege,
    updateCollegeById,
    newCollegeId,
    collegeId,
    isLoading,
    Error,
  };
};
export const userole = () => {
  const setRole = useRoleStore((state: any) => state.setRole);
  const IsLoading = useRoleStore((state: any) => state.setIsLoading);
  const IsError = useRoleStore((state: any) => state.setError);
  const roleName = useRoleStore((state: any) => state.roleName);
  const role_Loading = useRoleStore((state: any) => state.isLoading);
  const role_error = useRoleStore((state: any) => state.error);

  const Role = useAllRoll();

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
        console.error("Error fetching Role data:", error);
        IsError(error);
      }
    };

    fetchData();
  }, [Role.isSuccess, Role.isLoading, setRole, IsLoading, IsError]);

  return {
    roleName,
    role_Loading,
    role_error,
  };
};

export const useAdvisorData = () => {
  const setUser = useUserStore((state: any) => state.setUser);
  const setIsLoading = useUserStore((state: any) => state.setIsLoading);
  const setError = useUserStore((state: any) => state.setError);
  const user = useUserStore((state: any) => state.user);
  const selectedUserID = useUserStore((state: any) => state.selectedUserID);
  const setselectedUserID = useUserStore(
    (state: any) => state.setSelectedUserID
  );
  const queryClient = useQueryClient(); // Access the query client instance

  const univesrityId = useSessionStore((state) => state.universityID);

  const register_user = useAddAdvisor(dpID as string);
  const advisor = useDeptAdvisorData(dpID as string)


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (advisor.isSuccess) {
          setUser(advisor.data);
        }
        if (advisor.isLoading) {
          setIsLoading(advisor.isLoading);
        }
      } catch (error) {
        console.error("Error fetching College data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [advisor.isSuccess, advisor.isLoading, setUser, setError])
  const addUser = async (userData: any) => {
    try {
      const newUser = await register_user.mutateAsync(userData);

      queryClient.invalidateQueries("head");

      return newUser;
    } catch (error) {
      console.error("Error adding new Advisor:", error);
      throw error;
    }
  };

  

  return {
    user,
    addUser, //[][][][]it must be changed to make it real time update [][][][]

  };
};
