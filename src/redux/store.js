import { todoReducer } from './todos/reducer';
import { timerReducer } from './timer/reducer';
import { themeReducer } from './theme-mode/reducer';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';


const rootReducer = combineReducers({
    todo_reducer: todoReducer,
    timer_reducer: timerReducer,
    theme_reducer: themeReducer
});
const store = createStore(rootReducer, applyMiddleware(logger))

export default store;