import { CreateInput } from '../../styled-components/Todo.styled'
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../containers/todos/create.container'
import { v4 } from 'uuid'
import { useEffect } from 'react';

function Create({ addTodo, incrementTimer, resetTimer, isReset }) {
    useEffect( () => {
        let currentTimer
        if (isReset === true) {
            currentTimer = setInterval(() => incrementTimer(), 10000);
        }

    }, [isReset])

    return (
        <CreateInput
            onKeyDown={({ code, target }) => {
                if (code === "Enter" && target.value.trim() !== "" && target.value.trim().length <= 50) {
                    addTodo({ id: v4(), task: target.value })
                    resetTimer()
                    target.value = ''
                }

            }}
        />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)