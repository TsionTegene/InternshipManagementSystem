import { create } from "zustand";

const useItemStore = create((set) => ({
   
    selectedItemID: 123123,
   
    setSelectedItemID: (selectedItemID: any) => {
        console.log('Setting Itemid:', selectedItemID);

        set(() => ({ selectedItemID }))
    },

}))

export default useItemStore;