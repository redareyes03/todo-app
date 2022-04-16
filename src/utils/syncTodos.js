export function syncTodos(todos){
    return window.localStorage.setItem('todos', JSON.stringify([...todos]));
}