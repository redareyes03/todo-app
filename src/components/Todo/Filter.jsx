import { FilterControls } from "../../styled-components/Todo.styled"
import { useState } from "react";
import { connect } from "react-redux";

import { mapDispatchToProps, mapStateToProps } from '../../containers/filters/handleFilter';

function Filter({ filterAll, filterActive, filterCompleted, clearCompleted, countTimer, countTodos, countCompletedTodos, countActiveTodos }) {
    const [filter, setFilter] = useState("all");


    const handleFilter = (filter) => {
        setFilter(filter);
    }
    return (
        <FilterControls>

            <span id="timer">{countTimer < 1 ? "A moment ago" : countTimer < 60 ? `${countTimer} seconds ago` : `${Math.floor(countTimer / 60)} minutes ago`}</span>


            <div id="filters">
                <div>
                    <span
                        className={filter === "all" ? "active" : ""}
                        onClick={({ target }) => {
                            handleFilter(target.textContent.toLowerCase())
                            filterAll()
                        }}
                    >
                        All
                    </span>

                    <span className="todo-counter">{countTodos}</span>
                </div>

                <div>
                    <span
                        className={filter === "active" ? "active" : ""}
                        onClick={({ target }) => {
                            handleFilter(target.textContent.toLowerCase())
                            filterActive()
                        }}
                    >
                        Active
                    </span>
                    <span className="todo-counter">{countActiveTodos}</span>
                </div>

                <div>
                    <span
                        className={filter === "completed" ? "active" : ""}
                        onClick={({ target }) => {
                            handleFilter(target.textContent.toLowerCase())
                            filterCompleted()
                        }}
                    >
                        Completed
                    </span>
                    <span className="todo-counter">{countCompletedTodos}</span>
                </div>
            </div>
            <span className="cursor-pointer" id="clear" onClick={() => clearCompleted()}>Clear Completed</span>
        </FilterControls>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);