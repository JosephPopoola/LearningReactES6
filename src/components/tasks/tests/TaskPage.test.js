import React from 'react';
import expect from  'expect';
import {mount, shallow} from 'enzyme';
import {TaskPage} from '../TaskPage';

function setup(){

}

describe('Task Page', () => {
    it('sets error message when trying to add empty task', () => {
        const props = {
            tasks:[],
            actions: {saveTask: () => {return Promise.resolve(); }},
            task: {id:'',title:'',complete:false}
        };
        const wrapper = mount(<TaskPage {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('You need to add something...');
    });
});