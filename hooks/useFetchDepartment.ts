import { useDepartmentData } from "@/queries/useUniversityQueries";
import useDepartmentStore from "@/stores/department.store";
import { useEffect } from "react";
import { isDataView } from "util/types";

export const useDeparmentData = () => {
    const setDepartments = useDepartmentStore((state: any) => state.setDepartments); // here we are using the setDepartments method from the store to set the departments
    const data = useDepartmentData(); // here we are calling the useDepartment hook to fetch the data from the server

    let departments = null;
    if(data.isSuccess) {
        departments = data.data;
        setDepartments(data.data);
    }

    useEffect(() => {
        if(departments) {
            setDepartments(departments);
        }
    }, [departments, setDepartments])

    return {
        departments: useDepartmentStore((state: any) => state.departments),
        isDLoading: data.isPending,
        isDError: data.isError,
        errorD: data.error
    }
}