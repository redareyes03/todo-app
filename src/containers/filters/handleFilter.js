import { filterActive, filterAll, filterCompleted, clearCompleted } from '../../redux/todos/actions';

function mapDispatchToProps(dispatch) {
    return {
        filterAll: (todos) => dispatch(filterAll(todos)),
        filterCompleted: (todos) => dispatch(filterCompleted(todos)),
        filterActive: (todos) => dispatch(filterActive(todos)),
        clearCompleted: () => dispatch(clearCompleted())
    }
}


function mapStateToProps({timer_reducer, todo_reducer}) {
    return({
        countTimer: timer_reducer.countTimer,
        countTodos: todo_reducer.todos.length,
        countActiveTodos: [...todo_reducer.todos].filter(todo => todo.completed === false).length,
        countCompletedTodos: [...todo_reducer.todos].filter(todo => todo.completed === true).length,
    })
}

export {
    mapDispatchToProps, mapStateToProps
}