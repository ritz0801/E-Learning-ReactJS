import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Swal from "sweetalert2";
import apiCourse from '../../../API/courses';
import { connect } from 'react-redux';
import { getCourseDetail } from '../../../Redux/Actions/courses';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const EditCourse = (props) => {
    useEffect(() => {
        props.getCourseDetail(props.match.params._id);
    }, [])

    const courseSchema = yup.object().shape({
        tenKhoaHoc: yup.string().required('* Không được bỏ trống!'),
        moTa: yup.string().required('* Không được bỏ trống!'),
        hinhAnh: yup.string().required('* Không được bỏ trống!'),
        taiKhoanNguoiTao: yup.string().required('* Không được bỏ trống!'),
        maDanhMuc: yup.string(),
    })

    return (
        <div className="editCourse_wrapper container">
            <Typography className="text-center" variant="h4" id="tableTitle" component="div">
                Sửa khoá học
            </Typography>
            <Formik
                enableReinitialize
                initialValues={{
                    tenKhoaHoc: props.courseDetail && props.courseDetail.tenKhoaHoc,
                    moTa: props.courseDetail && props.courseDetail.moTa,
                    hinhAnh: props.courseDetail && props.courseDetail.hinhAnh,
                    taiKhoanNguoiTao: props.courseDetail && props.courseDetail.taiKhoanNguoiTao,
                    maDanhMuc: props.courseDetail && props.courseDetail.maDanhMuc,
                }}
                validationSchema={courseSchema}
                onSubmit={values => {
                    apiCourse
                        .put(`SuaKhoaHoc?_id=${props.courseDetail._id}`, values)
                        .then(() => {
                            Swal.fire({
                                title: 'Đã sửa khoá học thành công!',
                                icon: 'success',
                                confirmButtonColor: '#e74c3c',
                                confirmButtonText: 'Ok',
                            }).then(() => props.history.push('/admin/courselist'))
                        })
                }}
                render={(formikProps) => {
                    return <Form>
                        <div className="form-group">
                            <label htmlFor="id">ID: </label>
                            <Field id="id" type="text" className="form-control" name="id" readOnly value={props.courseDetail._id} />
                            <ErrorMessage name="id">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tenKhoaHoc">Tên khoá học: </label>
                            <Field id="tenKhoaHoc" type="text" className="form-control" name="tenKhoaHoc" onChange={formikProps.handleChange} />
                            <ErrorMessage name="tenKhoaHoc">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="moTa">Mô tả: </label>
                            <Field id="moTa" type="text" className="form-control" name="moTa" onChange={formikProps.handleChange} />
                            <ErrorMessage name="moTa">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="hinhAnh">Hình ảnh: </label>
                            <Field id="hinhAnh" type="text" className="form-control" name="hinhAnh" onChange={formikProps.handleChange} />
                            <ErrorMessage name="hinhAnh">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="taiKhoanNguoiTao">Tài khoản người tạo: </label>
                            <Field id="taiKhoanNguoiTao" type="text" className="form-control" name="taiKhoanNguoiTao" readOnly onChange={formikProps.handleChange} />
                            <ErrorMessage name="taiKhoanNguoiTao">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="maDanhMuc">Mã danh mục: </label>
                            <Field as="select" name="maDanhMuc" className="form-control" placeholder={props.courseDetail && props.courseDetail.maDanhMuc} onChange={formikProps.handleChange}>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Design">Design</option>
                            </Field>
                            <ErrorMessage name="maDanhMuc">
                                {(msg) => <div className="alert alert-danger">{msg}</div>}
                            </ErrorMessage>
                        </div>
                        <div className="text-center">
                            <Button variant="contained" color="primary" type="submit" disabled={!(formikProps.isValid && formikProps.dirty)}>HOÀN THÀNH</Button>
                        </div>
                    </Form>
                }} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        courseDetail: state.courseDetailReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCourseDetail: (_id) => {
            dispatch(getCourseDetail(_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);