import * as types from '../actions/actionTypes';

const taskReducerInitialState = [];

export default function taskReducer(state = taskReducerInitialState, action) {
    switch (action.type) {
        case types.createTask:
            return [...state, Object.assign({}, action.task)];
        case types.loadTasksSuccess:
            return action.task;
        default:
            return state;
    }
}