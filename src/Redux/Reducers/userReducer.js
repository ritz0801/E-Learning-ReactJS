import * as types from "../Constants/user";

const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        // case types.LOGIN_WITH_FB: {
        //   localStorage.setItem("user", JSON.stringify(action.user));
        //   return action.user;
        // }
        // case types.LOGIN_WITH_GG: {
        //   localStorage.setItem("user", JSON.stringify(action.user));
        //   return action.user;
        // }
        case types.LOGIN: {
            localStorage.setItem("token", JSON.stringify(action.user.token));
            localStorage.setItem("user", JSON.stringify(action.user));
            return action.user;
        }
        case types.LOGOUT: {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {};
        }
        default:
            return state;
    }
};
export default userReducer;