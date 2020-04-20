import React from 'react';
import userDefault from '../../Assets/img/user-default.png';
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Profile = (props) => {
    const profileSchema = yup.object().shape({
        matKhau: yup.string().required(),
    })

    const getDayMonthYear = (time) => {
        const d = new Date(time);
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        console.log(day, month, year)
        return [day, month, year].join('/');
    }

    return (
        <div className="profile_container">
            <div className="card_wrap container">
                <div className="card container-fluid">
                    <div className="card-body">
                        <Formik
                            initialValues={{
                                hoTen: props.user.hoTen,
                                taiKhoan: props.user.taiKhoan,
                                matKhau: '',
                                soDienThoai: props.user.soDienThoai,
                                email: props.user.email,
                            }}
                            validationSchema={profileSchema}
                            onSubmit={values => {

                            }}
                            render={(formikProps) => {
                                return <Form >
                                    <div className="profile_avatar">
                                        <label className="profile_avatar_label" style={{ backgroundImage: `url(${userDefault})`, width: "84px", height: "84px" }}>
                                            <input type="file" className="profile_avatar_input" />
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hoTen">Họ tên: </label>
                                        <Field id="hoTen" type="text" className="form-control" name="hoTen" readOnly value={props.user.hoTen} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="taiKhoan">Tài khoản: </label>
                                        <Field id="taiKhoan" type="text" className="form-control" name="taiKhoan" readOnly value={props.user.taiKhoan} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="soDienThoai">Số điện thoại: </label>
                                        <Field id="soDienThoai" type="text" className="form-control" name="soDT" readOnly value={props.user.soDienThoai} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email: </label>
                                        <Field id="email" type="email" className="form-control" name="email" readOnly value={props.user.email} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="maLoaiNguoiDung">Mã loại người dùng: </label>
                                        <Field id="maLoaiNguoiDung" type="text" className="form-control" name="maLoaiNguoiDung" readOnly value={props.user.maLoaiNguoiDung} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ngayTao">Ngày tham gia: </label>
                                        <Field id="ngayTao" type="text" className="form-control" name="ngayTao" readOnly value={getDayMonthYear(props.user.ngayTao)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matKhau">Mật khẩu: </label>
                                        <Field id="matKhau" type="password" className="form-control matKhau" name="matKhau" placeHolder="Mật khẩu mới" onChange={formikProps.handleChange} />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" disabled={!(formikProps.isValid && formikProps.dirty)} className="btn btn-primary m-2">LƯU</button>
                                    </div>
                                </Form>
                            }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
    }
}

export default connect(mapStateToProps, null)(Profile);