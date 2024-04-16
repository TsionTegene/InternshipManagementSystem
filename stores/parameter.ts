import { create } from "zustand";

const useParameter = create((set) => ({
    Id:[],
    setId: (Id: any) => set(() => ({ Id })),

}))

export default useParameter;