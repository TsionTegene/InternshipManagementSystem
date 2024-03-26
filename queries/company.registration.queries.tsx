import { registerCompany } from "@/api/company/mutations";
import { ICompanyRegistrationForm } from "@/api/company/type";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function RegisterCompany() {
  const mutation = useMutation<
    AxiosResponse<any>,
    Error,
    ICompanyRegistrationForm,
    unknown
  >((data: ICompanyRegistrationForm) => registerCompany(data), {
    onSuccess: (data: any) => {
      console.log("Company registered successfully with ID: ", data);
    },
    onError: (error: Error) => {
      console.error(error);
    },
  });

  const { mutate, isLoading, isError, error } = mutation;

  return { mutate, isLoading, isError, error };
}
