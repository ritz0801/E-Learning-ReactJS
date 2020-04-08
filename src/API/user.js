import axios from 'axios';

const apiUser = axios.create({
    baseURL: 'https://courseserver.herokuapp.com/api/QuanLyNguoiDung/'
})

export default apiUser;