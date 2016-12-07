const taskReducerInitialState = [];

export default function taskReducer(state = taskReducerInitialState, action) {
    switch (action.type) {
        case 'CREATE_TASK':
            return [...state, Object.assign({}, action.task)];
        default:
            return state;
    }
}