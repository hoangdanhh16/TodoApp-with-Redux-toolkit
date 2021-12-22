import { configureStore } from '@reduxjs/toolkit';

import filtersSlice from "../components/Filters/filtersSlice";
import toDoSlice from "../components/TodoList/toDoSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        toDoList: toDoSlice.reducer,
    }
})

export default store;