import { create } from "zustand";

const useItemStore = create((set) => ({
   
    selectedItemID: '111111a111c111e1e1111e1a',
   
    setSelectedItemID: (selectedItemID: any) => {
        console.log('Setting Itemid:', selectedItemID);

        set(() => ({ selectedItemID }))
    },

}))

export default useItemStore;