import { TodosContainer,Advertisment } from '../../styled-components/Todo.styled';
import Filter from './Filter';
import TodoItem from './TodoItem';


import { connect } from 'react-redux';
import { mapStateToProps } from '../../containers/todos/list.container'


function TodosList({ ...props }) {
    return (
        <TodosContainer>
            {props.todos.length > 0 ? <List props={props} /> : <Advertisment>Empty To Do list!</Advertisment> } 
            {props.todos.length > 0 && <Filter />} 
        </TodosContainer>
    )
}

function List({ props }) {

    if (props.filter === "active")
        return props.filterTodos.map(({ id, task, completed }) => !completed && <TodoItem key={id} id={id} task={task} completed={completed} />)

    if (props.filter === "completed")
        return props.filterTodos.map(({ id, task, completed }) => completed && <TodoItem key={id} id={id} task={task} completed={completed} />)

    
    return props.filterTodos.map(({ id, task, completed }) => <TodoItem key={id} id={id} task={task} completed={completed} />)
}


export default connect(mapStateToProps)(TodosList);