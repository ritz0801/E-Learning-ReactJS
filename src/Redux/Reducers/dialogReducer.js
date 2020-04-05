import * as types from "../Constants/dialog";

const initialState = false;

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOOGLE: {
            return !state;
        }
        default:
            return state;
    }
};

export default dialogReducer;