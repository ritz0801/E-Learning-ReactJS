import * as Types from '../Constants/user';

export const login = user => {
    return {
        type: Types.LOGIN,
        user
    };
};

export const logout = () => {
    return {
        type: Types.LOGOUT
    };
};
export const loginWithFB = user => {
    return {
        type: Types.LOGIN_WITH_FB,
        user
    };
};

export const loginWithGG = user => {
    return {
        type: Types.LOGIN_WITH_GG,
        user
    };
};

// export const register = user => {
//     return api.post("DangKy", user);
// };