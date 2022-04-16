import {editTodo} from '../../redux/todos/actions'
import {removeTodo} from '../../redux/todos/actions.js';
import {toggleTodo} from '../../redux/todos/actions.js';

function mapDispatchToProps(dispatch){
    return{
        editTodo: (id, newTask) => dispatch(editTodo(id, newTask)),
        removeTodo: (id) => dispatch(removeTodo(id)),
        toggleTodo: (id) => dispatch(toggleTodo(id))
    }
}

export {
    mapDispatchToProps
}