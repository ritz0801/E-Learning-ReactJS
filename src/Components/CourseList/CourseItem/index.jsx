import React, { useState } from 'react';
import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import Rating from "@material-ui/lab/Rating";

const CourseItem = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="course-item_container mb-4">
            <div className="course-item mb-2">
                {props.course && (
                    <img
                        src={props.course.hinhAnh}
                        alt=""
                        onLoad={() => {
                            let delay = _.debounce(() => setIsLoading(false), 5);
                            delay();
                        }}
                    />
                )}
                {
                    <div className="point">
                        {isLoading ? (
                            <div className="loading">
                                <Skeleton />
                            </div>
                        ) : (
                                <>
                                    <p>9.6</p>
                                    <Rating readOnly value={8.5} precision={0.5} />
                                </>
                            )}
                    </div>
                }
                {isLoading && (
                    <div className="loading">
                        <Skeleton width="100%" height="100%" />
                    </div>
                )}
            </div>
            <div className="course-item_detail">
                <p className="courseName text-center">
                    {isLoading ? <Skeleton /> : props.course.tenKhoaHoc}
                </p>
                <div className="btn_viewDetail">
                    {isLoading ? (
                        <div className="btn loading">
                            <Skeleton width="100%" height="41px" />
                        </div>
                    ) : (
                            <button className="btn w-100">
                                XEM CHI TIẾT
                            </button>
                        )}
                </div>
            </div>
        </div>
    );
};

export default CourseItem;