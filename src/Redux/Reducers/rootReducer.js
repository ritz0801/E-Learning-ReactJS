import { combineReducers } from "redux";
import coursesReducer from './coursesReducer';
import userReducer from './userReducer';
import dialogReducer from './dialogReducer';

const rootReducer = combineReducers({
    coursesReducer,
    userReducer,
    dialogReducer,
});

export default rootReducer;