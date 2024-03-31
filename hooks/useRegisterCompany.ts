import { ICompanyRegistrationForm } from "@/api/company/type";
import { RegisterCompany } from "@/queries/company.registration.queries";
import { useMutation } from "@tanstack/react-query";

export function useRegisterCompany(data: ICompanyRegistrationForm) {
    // To send a data to the react-query mutation, we need to call the mutate function with the data as a parameter
    const { mutate } = useMutation(RegisterCompany);I
}