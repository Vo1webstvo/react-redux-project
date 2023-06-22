import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filterLoadingStatus: 'idle',
    activeFilter: 'all',        //наши кнопки все, огонь, вода и т.д. изначально включено на все - all
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: state => {
            state.filterLoadingStatus = 'loading';
        },
        filtersFetched: (state, action) => {
            state.filters = action.payload;
            state.filterLoadingStatus = 'idle';
        },
        filterError: state => {
            state.filterLoadingStatus = 'error';
        },
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload;
        }
    }
});

 const {actions, reducer} = filterSlice

export default reducer;
 export const {
     filtersFetching,
     filtersFetched,
     filterError,
     activeFilterChanged,
 } = actions;
