import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as actions from '../actions/taskActions';
import thunk from 'redux-thunk';

describe('Store', ()=>{
    it('Should handle creating tasks', ()=>{
        
        //need to test this but it uses a thunk.

        // const middleware = [thunk];
        // const store = createStore(rootReducer,initialState, [middleware]);
        // const task = {id:'A',title:'test',complete:'false'};

        // const action = actions.saveTask(task);
        // store.dispatch(action);

        // const actual = store.getState().tasks[0];
        // const expected = {id:'A',title:'test',complete:'false'};

        // expect(actual).toEqual(expected);
    });
});