
const ADD_TASK = 'ADD_TASK';
const DETELE_TASKS='DETELE_TASKS';
const  MOVE_TO_TOP='MOVE_TO_TOP';
let ids = 0
let storeState = {
    todo:[

    ],

};


const taskReducers = (state = storeState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let body = action.addNewTask;
            if (body !== '') {
                return {
                    ...state,
                    todo: [...state.todo, {newTasks: body, id: ids++, complete: false}]

                    // newTask:body,
                }
            }

        case DETELE_TASKS:
            let id = action.deletId;
            return {
                ...state,
                todo:[
                ...state.todo.filter(el => el.id !== id)],
            }


        case MOVE_TO_TOP:
            return{
                ...state,
                todo: state.todo.map(task => {
                    return task.id !== action.id ? task : {
                        ...task,
                        complete: true,
                    }
                })
            }


        default:
            return state;
    }

}
export const addNewTaskCreator = (addNewTask) => {
    return {
        type: ADD_TASK,
        addNewTask:addNewTask,
    }

};
export const deleteNewTaskCreator = (deletId)=> {
      return {
        type : DETELE_TASKS,
          deletId:deletId,
    }
};
export const moveToTopTask =(complete, id )=>{
    return{
        type: MOVE_TO_TOP,
        complete:complete,
        id: id,
    }
}
export default taskReducers;