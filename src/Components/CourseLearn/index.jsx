import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import classNames from "classnames";
import { getCourseDetail } from "../../Redux/Actions/courses";
import { connect } from 'react-redux';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            <Box p={2}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

const CourseLearn = (props) => {
    useEffect(() => {
        props.getCourseDetail(props.match.params._id);
    }, [])

    const [value, setValue] = React.useState(0);
    let refs = useRef([]);

    const handleChange = newValue => {
        setValue(newValue);
    };

    const toggleActive = location => {
        refs.current.forEach((item, index) => {
            if (location === index) {
                item.classList.add("active");
            } else item.classList.remove("active");
        });
    };

    return (
        <div className="course_learn_container d-flex justify-content-between row">
            <ul className="colLeft_wrap col-md-5">
                <div className="colLeft_container">
                    {props.courseDetail.mucLuc && props.courseDetail.mucLuc.map((course, index) => {
                        return (
                            <li key={index}
                                className={classNames("colLeft_item d-flex justify-content-between", {
                                    active: index === 0
                                })}
                                onClick={() => {
                                    handleChange(index);
                                    toggleActive(index);
                                }}
                                ref={li => (refs.current[index] = li)}>
                                <p className="colLeft_item_title">{course.tieuDe}</p>
                                <p className="colLeft_item_time">2 phút</p>
                            </li>
                        );
                    })}
                </div>
            </ul>

            <div className="colRight_wrap col-md-7">
                {props.courseDetail.mucLuc && props.courseDetail.mucLuc.map((video, index) => {
                    return (
                        <TabPanel value={value} index={index} key={index}>
                            <iframe src="https://www.youtube.com/embed/J7u6hWHuUq0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </TabPanel>
                    );
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        courseDetail: state.courseDetailReducer,
    }
}

export default connect(mapStateToProps, { getCourseDetail })(CourseLearn);