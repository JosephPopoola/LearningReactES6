import expect from 'expect';
import taskReducer from '../taskReducer';
import * as actions from '../../actions/taskActions';

describe('Task Reducer', () => {

    it('should add Task when passed CREATE_TASK_SUCCESS action', ()=>{

        const initialState = [
            {id:'A', title: 'A'},
            {id:'B', title: 'B'}
        ];

        const newTask = {id:'C', title: 'C'};

        const action = actions.saveTask(newTask);

        const newState = taskReducer(initialState, action);

        //This uses thunks so need to see how to test thunks
        //expect(newState.length).toEqual(3);
        //expect()
    });
});