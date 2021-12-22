import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const prioritySelector = (state) => state.filters.priority;
export const toDoListSelector = (state) => state.toDoList;

export const toDoRemainingSelector = createSelector(
  toDoListSelector,
  statusSelector,
  prioritySelector,
  searchTextSelector,
  (toDoList, status, priority, searchText) => {
    return toDoList.filter((toDo) => {
      if (status === "All") {
        return priority.length
          ? toDo.name.includes(searchText) && priority.includes(toDo.priority)
          : toDo.name.includes(searchText);
      }
      return (
        toDo.name.includes(searchText) &&
        (status === "Completed" ? toDo.completed : !toDo.completed) &&
        (priority.length ? priority.includes(toDo.priority) : true)
      );
    });
  }
);
