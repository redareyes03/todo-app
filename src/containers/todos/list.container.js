function mapStateToProps({todo_reducer}) {
    return ({
        todos: todo_reducer.todos,
        filter: todo_reducer.filter,
        filterTodos: todo_reducer.filterTodos
    })
}



export {
    mapStateToProps
}