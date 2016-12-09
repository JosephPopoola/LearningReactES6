import expect from 'expect';
import React from 'react';
import {mount,shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import TaskEditForm from '../TaskEditForm';

function setup(saving){
    const props = {
        task: {}, 
        saving: saving, 
        errors: '',
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<TaskEditForm {...props}/>);
}

describe('Task Edit Form', ()=> {
    it('renders form and h12', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Doing the wrong bits for ');
    });

    it('save button labelled with "Save" when not saving', () => {
        const wrapper = setup(false);  
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('save button labelled with "Saving..." when saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});