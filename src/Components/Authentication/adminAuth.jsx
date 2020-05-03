import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Swal from "sweetalert2";

const AdminAuth = ({ component: Component, ...props }) => {
    return (
        <Route {...props} render={routeProps => {
            const user = JSON.parse(localStorage.getItem('user'));
            const userParse = JSON.parse(user);
            if (user) {
                if (user.maLoaiNguoiDung === 'AD') {
                    return <Component {...routeProps} />
                }
                return <Redirect to='/' />;
            }
            Swal.fire({
                title: 'Bạn chưa đăng nhập!',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            })
            return <Redirect to='/admin/login' />
        }} />
    );
};

export default AdminAuth;