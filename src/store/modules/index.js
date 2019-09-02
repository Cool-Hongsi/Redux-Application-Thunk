import { combineReducers } from 'redux';
import counter from './counter';
import post from './post';

// Root Reducer
export default combineReducers({
    counter,
    post,
    // other reducers
});