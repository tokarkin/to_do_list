import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from  "redux-thunk"
import {reducer as formReducer} from "redux-form";
import taskReducers from "./input-reduces";

let reducerItems = combineReducers({
    form:formReducer,
    todoTask:taskReducers,
});

let store =createStore(reducerItems, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;