import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "toDoList",
  initialState: [
    { id: 1, name: "Learn React", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
  ],
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },

    toggleStatus: (state, action) => {
      const currentToDo = state.find(toDo => toDo.id === action.payload);
      if(currentToDo) {
        currentToDo.completed = !currentToDo.completed;
      }
    },
  },
});
