import { combineReducers } from "redux";
import coursesReducer from './coursesReducer';

const rootReducer = combineReducers({
    coursesReducer,
});

export default rootReducer;