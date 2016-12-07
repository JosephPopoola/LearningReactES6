import * as types from '../actions/actionTypes';

const taskReducerInitialState = [];

export default function taskReducer(state = taskReducerInitialState, action) {
    switch (action.type) {
        case types.createCourse:
            return [...state, Object.assign({}, action.task)];
        default:
            return state;
    }
}