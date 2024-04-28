/* eslint-disable react-hooks/rules-of-hooks */
import { useFindCompanyByUserId } from "@/queries/useCompanyQueries";
import { useCreateInternshipMutation } from "@/queries/useInternshipQueries";
import { useEffect, useState } from "react";

export const useCreateInternship = () => {
    const [companyId, setCompanyId] = useState<string | null>(null);

    // Assuming `useFindCompanyByUserId` needs a userId to function correctly:
    const userId = localStorage.getItem('userId'); // This is generally not recommended to be directly used in render phases, consider passing it as a prop or using a context.
    const { data: companyData } = useFindCompanyByUserId(userId); // Adjust the hook to take `userId` as an argument.

    useEffect(() => {
        if (companyData) {
            setCompanyId(companyData.id); // Assuming the fetched data has an 'id' field representing the companyId.
        }
    }, [companyData]); // Depend on companyData so that whenever it updates, the effect runs.

    const { data, error, isPending, isSuccess, isError, mutate } = useCreateInternshipMutation();

    const createInternship = async (formData: FormData) => {
        const data = { companyId: companyId, ...formData };
        await mutate(data);
    };

    return { data, error, isPending, isSuccess, isError, createInternship };
};
