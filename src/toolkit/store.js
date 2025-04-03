import {configureStore, createSlice} from '@reduxjs/toolkit';

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: { isOn: false},
    reducers: {
        toggleState: (state) => {
            state.isOn = !state.isOn;
        }
    }
})

export const { toggleState } = toggleSlice.actions;

const store = configureStore({
    reducer: {
        toggle: toggleSlice.reducer
    }
})

export default store;