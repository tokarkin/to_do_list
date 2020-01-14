import React from "react";
import {Field, reduxForm} from "redux-form";
import TaskList from "./tastLists";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)


const useStyles = makeStyles(theme => ({
    input:{
        width:'30%',
        margin:'50px'
    },
    wrapper:{
        width:'100%',

    }
}));
let InputForm =(props)=>{
    const classes = useStyles();

    let task = [...props.todoTask.todo].sort((a,b)=>{
        if (a.complete) {
            return -1;
        }
        if (b.complete) {
            return 1;
        }
        return 0;
    }).map(i => <TaskList key={i.id} moveToTopTask={props.moveToTopTask}  deleteNewTaskCreator={props.deleteNewTaskCreator} taskList={i.newTasks} id ={i.id}
    complete = {i.complete}/>)
    return( <div>
        <form onSubmit={props.handleSubmit} >
            <div   className = {classes.wrapper}>
                <Field
                    className = {classes.input}
                    name="nameOfTask"
                    component={renderTextField}
                    type="text"
                    placeholder="Enter your task"
                />
            </div>
        </form>
            {task}
    </div>
    )
}

const InputToDoData = reduxForm({
    form:'inputTask'
})(InputForm)

export default (InputToDoData);