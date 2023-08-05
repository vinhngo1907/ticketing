import { combineReducers } from 'redux'
import event from './eventReducer';
import error from './errorReducer';
import modal from './modalReducer';

export default combineReducers({
    event,
    error,
    modal
})