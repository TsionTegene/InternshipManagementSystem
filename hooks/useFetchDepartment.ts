import { useUnivesityAddDepartment } from "@/queries/useUniversityQueries";
import useDepartmentStore from "@/stores/department.store";
import { useEffect } from "react";

export const useDeparmentData = () => {
    const setDepartments = useDepartmentStore((state: any) => state.setDepartments); // here we are using the setDepartments method from the store to set the departments
    const data = useUnivesityAddDepartment(); // here we are calling the useDepartment hook to fetch the data from the server

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
        isDError: data.isError,
        errorD: data.error
    }
}