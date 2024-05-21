import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    error: false,
    loading: false,
};

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setLoading, setMessage, setError } = contactSlice.actions;
export default contactSlice.reducer;
