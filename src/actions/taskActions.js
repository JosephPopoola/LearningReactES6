import * as types from './actionTypes';
import taskAPI from '../api/mockTaskApi';

//action creators
export function createTaskSuccess(task){
    return {type: types.createTaskSuccess, task};
}

export function updateTasksSuccess(task){
    return {type: types.updateTaskSuccess, task};
}

export function loadTasksSuccess(task){
    return {type: types.loadTasksSuccess, task};
}

//actions
export function loadTasks(){
    return function(dispatch){
        return taskAPI.getAlltasks().then(tasks => {
            dispatch(loadTasksSuccess(tasks));
        }).catch(error =>{
            throw(error);
        });
    };
}

export function saveTask(task){
    return function(dispatch){
        return taskAPI.savetask(task).then(savedTask => {
            task.id ? dispatch(updateTasksSuccess(savedTask)) : dispatch(createTaskSuccess(savedTask));
        }).catch(error =>{
            throw(error);
        });
    };
}