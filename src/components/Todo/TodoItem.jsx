import { StyledItem } from "../../styled-components/Todo.styled";
import IconCross from "../../assets/images/icon-cross.svg";
import { TodoCheckbox } from "../../styled-components/Todo.styled";

import { mapDispatchToProps } from '../../containers/todos/modify.container'
import { connect } from "react-redux";

function TodoItem({ id, task, completed, editTodo, removeTodo, toggleTodo }) {
    return (
        <StyledItem>
            <div>
                <TodoCheckbox check={completed} onClick={() => toggleTodo(id)} />
                <input type="text" check={completed ? "true" : "false"} disabled={completed} defaultValue={task} className="todo-task"
                    onKeyUp={({ code, target }) => {
                        if (code === "Enter") {
                            editTodo(id, target.value)
                        }
                    }}
                />
            </div>
            <img className="cursor-pointer" src={IconCross} alt="Icon Cross" onClick={() => removeTodo(id)} />
        </StyledItem>
    )
}

export default connect(null, mapDispatchToProps)(TodoItem)