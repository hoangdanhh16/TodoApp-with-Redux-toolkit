export const addToDo = (data) => {
    return {
        type: 'toDoList/addToDo',
        payload: data
    }
}

export const toggleStatus = (id) => {
    return {
        type: 'toDoList/toggleStatus',
        payload: id
    }
}

export const searchFilter = (text) => {
    return {
        type: 'filters/searchFilter',
        payload: text
    }
}

export const statusFilter = (status) => {
    return {
        type: 'filters/statusFilter',
        payload: status
    }
}

export const priorityFilter = (priority) => {
    return {
        type: 'filters/priorityFilter',
        payload: priority
    }
}