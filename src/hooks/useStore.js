import {create} from 'zustand';

const useStore = create((set) => ({
    isOn: false,
    toggleState: () => set((state) => ({isOn: !state.isOn})),
}))

export default useStore;