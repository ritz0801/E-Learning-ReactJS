import React, { useState } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import logo from '../../Assets/img/logoelearning.jpg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Header = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClicLoginkOpen = () => {
        setOpenLogin(true);
    };

    const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const handleClickRegisterOpen = () => {
        setOpenRegister(true);
    }

    const handleCloseRegister = () => {
        setOpenRegister(false);
    };

    const registerSchema = yup.object().shape({
        hoTen: yup.string().required('* Không được bỏ trống!'),
        taiKhoan: yup.string().required('* Không được bỏ trống!'),
        matKhau: yup.string().required('* Không được bỏ trống!'),
        soDT: yup.string().required('* Không được bỏ trống!').matches(/^[0-9]+$/),
        email: yup.string().required('* Không được bỏ trống!').email('* Sai định dạng Email!'),
    })

    const loginSchema = yup.object().shape({
        taiKhoan: yup.string().required('* Không được bỏ trống!'),
        matKhau: yup.string().required('* Không được bỏ trống!'),
    })

    return (
        <header className="container-fluid myNavBar">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="col-xl-8 col-lg-9 col-md-8 col-sm-6">
                    <div className="row">
                        <NavLink className="navbar-brand" to="/">
                            <img src={logo} alt="Logo Udemy" />
                        </NavLink>
                        <NavLink className="myNavBar_categories" to='/all-courses'>
                            <i className="fa fa-th  mx-2" />
                            Tất cả khóa học
                        </NavLink>
                        <div className="myNavBar_search">
                            <form className="input-group ">
                                <input type="text" className="form-control" placeholder="Tìm khóa học bạn quan tâm..." />
                                <div className="input-group-append">
                                    <span className="btn input-group-text"><i className="fa fa-search" /></span>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* END row */}
                </div>
                {/* END col-6 */}
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-4">
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <i className="fa fa-shopping-cart" />
                            </li>
                            <li className="nav-item ">
                                <div className="button d-flex">
                                    <button className="btn mr-1 btn--white" type="submit" onClick={handleClicLoginkOpen}>Đăng nhập</button>
                                    <button className="btn btn--red" type="submit" onClick={handleClickRegisterOpen}>Đăng ký</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* END col-6 */}
                <button className="navbar-toggler d-lg-none col-sm-2" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </nav>

            {/* Form đăng nhập */}
            <Dialog open={openLogin} onClose={handleCloseLogin} aria-labelledby="form-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth}>
                <DialogTitle id="form-dialog-title">ĐĂNG NHẬP</DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            taiKhoan: '',
                            matKhau: '',
                        }}
                        validationSchema={loginSchema}
                        // onSubmit={}
                        render={(formikProps) => {
                            return <Form>
                                <div className="form-group">
                                    <label htmlFor="taiKhoan">Tài khoản: </label>
                                    <Field id="taiKhoan" type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange} />
                                    <ErrorMessage name="taiKhoan">
                                        {(msg) => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="matKhau">Mật khẩu: </label>
                                    <Field id="matKhau" type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange} />
                                    <ErrorMessage name="matKhau">
                                        {(msg) => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="text-center">
                                    <Button onClick={handleCloseLogin}>Cancel</Button>
                                    <button onClick={handleCloseLogin} disabled={!(formikProps.isValid && formikProps.dirty)} className="btn btn-danger m-2">ĐĂNG NHẬP</button>
                                </div>
                            </Form>
                        }} />
                </DialogContent>
            </Dialog>

            {/* Form đăng ký */}
            <Dialog open={openRegister} onClose={handleCloseRegister} aria-labelledby="form-dialog-title" fullWidth={fullWidth} maxWidth={maxWidth}>
                <DialogTitle id="form-dialog-title">ĐĂNG KÝ</DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{
                            hoTen: '',
                            taiKhoan: '',
                            matKhau: '',
                            soDT: '',
                            email: '',
                        }}
                        validationSchema={registerSchema}
                        // onSubmit={}
                        render={(formikProps) => {
                            return <Form>
                                <div className="form-group">
                                    <label htmlFor="hoTen">Họ tên: </label>
                                    <Field id="hoTen" type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange} />
                                    <ErrorMessage name="hoTen">
                                        {(msg) => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="taiKhoan">Tài khoản: </label>
                                    <Field id="taiKhoan" type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange} />
                                    <ErrorMessage name="taiKhoan">
                                        {(msg) => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="matKhau">Mật khẩu: </label>
                                    <Field id="matKhau" type="password" className="form-control" name="matKhau" onChange={formikProps.handleChange} />
                                    <ErrorMessage name="matKhau">
                                        {(msg) => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="soDT">Số điện thoại: </label>
                                    <Field id="soDT" type="text" className="form-control" name="soDT" onChange={formikProps.handleChange} />
                                    <ErrorMessage name="soDT">
                                        {(msg) => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email: </label>
                                    <Field id="email" type="email" className="form-control" name="email" onChange={formikProps.handleChange} />
                                    <ErrorMessage name="email">
                                        {(msg) => <div className="alert alert-danger">{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="text-center">
                                    <Button onClick={handleCloseRegister}>Cancel</Button>
                                    <button onClick={handleCloseRegister} disabled={!(formikProps.isValid && formikProps.dirty)} className="btn btn-danger m-2">ĐĂNG KÝ</button>
                                </div>
                            </Form>
                        }} />
                </DialogContent>
            </Dialog>
        </header>
    );
};



export default withRouter(Header);