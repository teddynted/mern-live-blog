import { combineReducers } from 'redux';
import blogReducer from './blog';

const rootReducer = combineReducers({
   blog: blogReducer
});

export default rootReducer;