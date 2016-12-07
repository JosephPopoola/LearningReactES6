import * as types from './actionTypes';
import taskAPI from '../api/mockTaskApi';

export function createTask(task){
    return {type: types.createTask, task};
}

export function loadTasksSuccess(task){
    return {type: types.loadTasksSuccess, task};
}

export function loadTasks(){
    return function(dispatch){
        return taskAPI.getAlltasks().then(tasks => {
            dispatch(loadTasksSuccess(tasks));
        }).catch(error =>{
            throw(error);
        });
    };
}