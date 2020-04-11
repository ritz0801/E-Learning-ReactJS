import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCourseDetail } from '../../Redux/Actions/courses';
import CourseItem from '../CourseList/CourseItem';
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const NextArrow = ({ className, style, onClick }) => {
    return (
        <ArrowForwardIosIcon
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const PrevArrow = ({ className, style, onClick }) => {
    return (
        <ArrowBackIosIcon
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const CourseDetail = (props) => {
    useEffect(() => {
        props.getCourseDetail(props.match.params._id);
    }, [])

    const renderRelatedCourses = (catalog) => {
        let coursesListByCatalog = props.coursesList.filter((course) => {
            return course.maDanhMuc === catalog
        })

        return coursesListByCatalog.map((course, index) => {
            return <div key={index} className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block course-item_container">
                <CourseItem course={course} />
            </div>
        })
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        draggable: true,
        rows: 2,
        slidesPerRow: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className='coursedetail container-fluid'>

            <div className='coursedetail_title'>
                <h1>{props.courseDetail.tenKhoaHoc}</h1>
            </div>

            <div className='row'>
                <div className='col-md-8 coursedetail_content'>
                    <div className='coursedetail_content-top'>
                        <h3>Mô tả khóa học</h3>

                    </div>

                    <p className='coursedetail_detail'>
                        {props.courseDetail.moTa} <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing <br />
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>

                <div className='mt-4 col-md-4'>
                    <div className="card coursedetail_card text-center" style={{ width: '18rem' }}>
                        <img src={props.courseDetail.hinhAnh} className="card-img-top" alt="hinhkhoahoc" />
                        <div className="card-body">
                            <h5 className="coursedetail_card_title">{props.courseDetail.tenKhoaHoc}</h5>
                            {/* <p className="card-text coursedetail_card_content">chua biết viet gi</p> */}
                            <div className="rating_stars my-2">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                            </div>
                            <button className="btn btn--red_big coursedetail_card_btn">GHI DANH</button>
                        </div>
                    </div>
                </div>

                <div className='related_course text-center container-fluid'>
                    <h4 className="related_course_title">Các khóa học cùng lĩnh vực có thể bạn quan tâm</h4>
                    <Slider {...settings} className="courses-list container">
                        {renderRelatedCourses(props.courseDetail.maDanhMuc)}
                    </Slider>

                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        courseDetail: state.courseDetailReducer,
        coursesList: state.coursesReducer,
    }
}

export default connect(mapStateToProps, { getCourseDetail })(CourseDetail);