import React, { useState } from 'react';
import { connect } from "react-redux";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CourseItem from "../CourseList/CourseItem";

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

const AllCourseList = (props) => {
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

    const renderCourseList = () => {
        return props.coursesList.map((course, index) => {
            return (
                <div
                    key={index}
                    className="col-md-3 col-sm-6 col-xs-12 w-25 d-inline-block course-item_container"
                >
                    <CourseItem course={course} />
                </div>
            );
        });
    }

    return (
        <div className="mt-4 all-courses-list w-75 container-fluid">
            <Slider {...settings} className="courses-list container-fluid">
                {renderCourseList()}
            </Slider>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        coursesList: state.coursesReducer,
    }
}

export default connect(mapStateToProps, null)(AllCourseList);