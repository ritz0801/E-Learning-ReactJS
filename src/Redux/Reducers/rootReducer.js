import { combineReducers } from "redux";
import coursesReducer from './coursesReducer';
import userReducer from './userReducer';
import dialogReducer from './dialogReducer';
import courseDetailReducer from './courseDetail';

const rootReducer = combineReducers({
    coursesReducer,
    courseDetailReducer,
    userReducer,
    dialogReducer,
});

export default rootReducer;