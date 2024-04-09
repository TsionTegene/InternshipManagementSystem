import { create } from "zustand";
import { Company } from "@/types"

// Creating a store for company
export const useCompanyStore = create((set) => ({ // here we are creating a store for company and set is a function that is used to update the store
  company: {} as Company, // here we are initializing the company store with an empty object
  setCompany: (company: Company) => set({ company }), // here we are updating the company store with the company object and company is the parameter that is passed to this function from the component or react hook
  clearCompany: () => set({ company: {} }), // here we are clearing the company store by setting it to an empty object
}));