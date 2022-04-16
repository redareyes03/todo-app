import {addTodo} from '../../redux/todos/actions'
import {incrementTimer, resetTimer} from '../../redux/timer/actions'

function mapDispatchToProps(dispatch){
    return {
        addTodo: (payload) => dispatch(addTodo(payload)),
        incrementTimer: () => dispatch(incrementTimer()),
        resetTimer: () => dispatch(resetTimer())
    }
}

function mapStateToProps({timer_reducer}){
    return {
        isReset: timer_reducer.isReset
    }
}

export {
    mapDispatchToProps, mapStateToProps
}