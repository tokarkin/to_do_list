import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckIcon from '@material-ui/icons/Check';



function TaskList(props) {

    let del =()=>{
      props.deleteNewTaskCreator(props.id);
    }
    let moveToTop =()=>{
        props.moveToTopTask(props.complete, props.id)
    }

    return (
        <div>

            <ListItem button>
                    <LabelImportantIcon/>
                <ListItemText primary={props.taskList}/>
                {
                    props.complete === true ? <CheckIcon />: <AddCircleIcon onClick={moveToTop}/>
                }
                <button onClick={del}>del</button>
            </ListItem>

        </div>

    )
}

export default TaskList;