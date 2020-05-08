import { combineReducers } from "redux";
import coursesReducer from './coursesReducer';
import userReducer from './userReducer';
import dialogReducer from './dialogReducer';
import courseDetailReducer from './courseDetail';
import studentReducer from './studentReducer';

const rootReducer = combineReducers({
    coursesReducer,
    courseDetailReducer,
    userReducer,
    dialogReducer,
    studentReducer,
});

export default rootReducer;