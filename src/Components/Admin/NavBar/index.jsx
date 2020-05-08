import React from 'react';
import { withRouter } from 'react-router-dom';

const NavBar = (props) => {
    const goToAddCourse = () => {
        props.history.push('/admin/addcourse');
    }

    const goToCourseList = () => {
        props.history.push('/admin/courselist');
    }

    const goToStudentList = () => {
        props.history.push('/admin/studentlist');
    }

    return (
        <div className="admin_navbar_wrapper">
            <div className="admin_navbar_sidebar">
                <h2 className="admin_navbar_title">QUẢN TRỊ</h2>
                <ul className="admin_navbar_ul">
                    <li className="admin_navbar_li"><p className="admin_navbar_content" onClick={goToCourseList}>Danh sách khoá học</p></li>
                    <li className="admin_navbar_li"><p className="admin_navbar_content" onClick={goToStudentList}>Danh sách học viên</p></li>
                    <li className="admin_navbar_li"><p className="admin_navbar_content" onClick={goToAddCourse}>Thêm khoá học</p></li>
                    <li className="admin_navbar_li"><p className="admin_navbar_content">Sửa khoá học</p></li>
                    <li className="admin_navbar_li"><p className="admin_navbar_content">Tìm học viên theo ID</p></li>
                    <li className="admin_navbar_li"><p className="admin_navbar_content">Tìm học viên theo tài khoản</p></li>
                </ul>
            </div>
        </div>
    );
};

export default withRouter(NavBar);