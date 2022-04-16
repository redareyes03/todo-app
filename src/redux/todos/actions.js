export const addTodo = (todo) => {
    return ({
        type: "@add/todo",
        payload: todo
    }) 
}

export const editTodo = (id, newTask) => {
    return ({
        type: "@edit/todo",
        payload: {
            id, newTask
        }
    })
} 

export const removeTodo = (id) => {
    return ({
        type: "@remove/todo",
        payload: id
    })
}

export const toggleTodo = (id) => {
    return ({
        type: "@toggle/todo",
        payload: id
    })
}

export const clearCompleted = () => {
    return ({
        type: "@clearCompleted/todo",
    })
}

export const filterAll = () => {
    return ({
        type: "@all/filter",
        payload: "all"
    })
}

export const filterCompleted = () => {
    return ({
        type: "@completed/filter",
        payload: "completed"
    })
}

export const filterActive = () => {
    return ({
        type: "@active/filter",
        payload: "active"
    })
}

