import * as Types from '../Constants';
import api from '../../API/courses';

export const getCoursesList = () => {
    return (dispatch) => {
        api.get('LayDanhSachKhoaHoc').then((result) => {
            return dispatch({ type: Types.GET_COURSES_LIST, payload: result.data.courses })
        });
    };
};
