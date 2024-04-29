import { create } from "zustand";

const useItemStore = create((set) => ({
   
    selectedItemID: null,
   
    setSelectedItemID: (selectedItemID: any) => {
        console.log('Setting Itemid:', selectedItemID);

        set(() => ({ selectedItemID }))
    },

}))

export default useItemStore;