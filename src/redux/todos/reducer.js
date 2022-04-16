import { findElements } from '../../utils/findElement'
import { syncTodos } from '../../utils/syncTodos'


const initialState = {
    todos: window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : [],
    filter: 'all',
    filterTodos: window.localStorage.getItem('todos') ? JSON.parse(window.localStorage.getItem('todos')) : [],
    completedTodos : 0,
    activeTodos : 0
}


export const todoReducer = (state = initialState, action) => {

    const { payload } = action

    switch (action.type) {
        case "@add/todo":
            payload.completed = false;
            state.todos.push(payload);
            state.filterTodos = [...state.todos];
            syncTodos(state.todos);
            return {
                ...state
            }

        case "@edit/todo":
            const { id, newTask } = payload;
            const idTaskToEdit = [...state.todos].findIndex(todo => todo.id === id)
            state.todos[idTaskToEdit].task = newTask;
            syncTodos(state.todos);
            
            return {
                todos: [...state.todos],
                ...state
            }

        case "@remove/todo":
            state.todos = state.todos.filter(todo => todo.id !== payload);
            state.filterTodos = [...state.todos];
            syncTodos(state.todos);

            return {
                ...state
            }

        case "@toggle/todo":
            const idToToggle = findElements("id", payload, state.todos);
            state.todos[idToToggle].completed = !state.todos[idToToggle].completed
            state.filterTodos = [...state.todos];
            syncTodos(state.todos);

            return {
                ...state
            }

        case "@clearCompleted/todo":
            state.todos = state.todos.filter(todo => !todo.completed);
            state.filterTodos = [...state.todos];
            syncTodos(state.todos);

            return {
                ...state
            }

        case "@all/filter":
            state.filterTodos = [...state.todos];
            state.filter = payload;

            return {
                filter: payload,
                ...state
            }

        case "@completed/filter":
            state.filterTodos = [...state.todos].filter(todo => todo.completed === true);
            state.filter = payload;
            return {
                filterTodos: [...state.filterTodos],
                ...state
            }

        case "@active/filter":
            state.filterTodos = [...state.todos].filter(todo => todo.completed === false);
            state.filter = payload;            
            return {
                filterTodos: [...state.filterTodos],
                ...state
            }

        default:
            return { ...state }
    }
}