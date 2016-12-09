import * as types from './actionTypes';
import taskAPI from '../api/mockTaskApi';
import {beginAjaxCall,ajaxErrorHandled} from './ajaxStatusActions';

//action creators
function createTaskSuccess(task){
    return {type: types.createTaskSuccess, task};
}

function updateTasksSuccess(task){
    return {type: types.updateTaskSuccess, task};
}

function loadTasksSuccess(task){
    return {type: types.loadTasksSuccess, task};
}

//actions
export function loadTasks(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return taskAPI.getAlltasks().then(tasks => {
            dispatch(loadTasksSuccess(tasks));
        }).catch(error =>{
            dispatch(ajaxErrorHandled(error));
            throw(error);
        });
    };
}

export function saveTask(task){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return taskAPI.savetask(task).then(savedTask => {
            task.id ? dispatch(updateTasksSuccess(savedTask)) : dispatch(createTaskSuccess(savedTask));
        }).catch(error =>{
            dispatch(ajaxErrorHandled(error));
            throw(error);
        });
    };
}