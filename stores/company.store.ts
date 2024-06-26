import { create } from "zustand";
import { Company } from "@/types"

// Creating a store for company
export const useCompanyStore = create((set) => ({ // here we are creating a store for company and set is a function that is used to update the store
  company: [], // here we are initializing the company store with an empty object
  setCompany: (company: Company) => set({ company }), // here we are updating the company store with the company object and company is the parameter that is passed to this function from the component or react hook
  setIsLoading: (isLoading: boolean) => set({ isLoading }), // here we are updating the isLoading store with the isLoading boolean and isLoading is the parameter that is passed to this function from the component or react hook
  setIsError: (isError: boolean) => set({ isError }), // here we are updating the isError store with the isError boolean and isError is the parameter that is passed to this function from the component or react hook
  clearCompany: () => set({ company: {} }), // here we are clearing the company store by setting it to an empty object
}));

export const useMentor = create((set) => ({
  mentor: {} as any,
  setMentor: (mentor: any) => set({ mentor }),
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  isError: false,
  setIsError: (isError: boolean) => set({ isError }),
}))