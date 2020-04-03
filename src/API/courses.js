import axios from 'axios';

const api = axios.create({
    baseURL: "https://courseserver.herokuapp.com/api/QuanLyKhoaHoc/"
});

export default api;