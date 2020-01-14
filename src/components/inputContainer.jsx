import React from "react";
import InputToDoData from "./inputForm";
import {connect} from "react-redux";
import {addNewTaskCreator, deleteNewTaskCreator, moveToTopTask} from "../reducers/input-reduces";



const InputContainer = (props)=> {
    const onSubmit = (formData) => {
        props.addNewTaskCreator(formData.nameOfTask);
         formData.nameOfTask = '';
    }

    return <div>
        <InputToDoData moveToTopTask={props.moveToTopTask} todoTask={props.todoTask} deleteNewTaskCreator={props.deleteNewTaskCreator} onSubmit={onSubmit}/>
    </div>
};

let moveStateToProps = (state) => {
    return {
        todoTask: state.todoTask,
    }
};


export default connect(moveStateToProps, {moveToTopTask,addNewTaskCreator,deleteNewTaskCreator})(InputContainer);



