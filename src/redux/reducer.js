import { combineReducers } from "redux";

import filtersReducer from "../components/Filters/FiltersSlice";
import toDoReducer from "../components/TodoList/ToDoSlice";

const rootReducer = combineReducers({
  filters: filtersReducer,
  toDoList: toDoReducer,
});

export default rootReducer;
