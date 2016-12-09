import * as types from './actionTypes';

export function beginAjaxCall(){
    return {type: types.beginAjaxCall};
}

export function ajaxErrorHandled(){
    return {type: types.ajaxCallError};
}