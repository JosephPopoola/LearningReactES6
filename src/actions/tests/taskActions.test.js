import expect from 'expect';
import * as actions from '../../actions/taskActions';
import * as types from '../actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Task Actions', () => {

    it('should add Task when passed CREATE_TASK_SUCCESS action', ()=>{


    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', ()=>{
    afterEach(()=>{
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done)=>{
        //This is an example of how an ajax call would be tested.
        //nock('http:/example.com/')
        //    .get('/tasks/')
        //    .reply(200, {body: {task: [{id:'A', title:'title', comeplte: 'false'}] }});


        //below code all had to be written because a real api call was not used. 
        const expectedActions = [
            {type: types.beginAjaxCall},
            {type: types.loadTasksSuccess, body: {task: [{id:'A', title:'title', comeplte: 'false'}] }}
        ];

        const store = mockStore({tasks: [], expectedActions});
        store.dispatch(actions.loadTasks()).then(()=>{
            const storeActions = store.getActions();
            expect(storeActions[0].type).toEqual(types.beginAjaxCall);
            expect(storeActions[1].type).toEqual(types.loadTasksSuccess);
            done();
        });
    });

});