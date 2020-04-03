import React from 'react';
import BannerCarousel from '../Components/BannerCarousel'
import CourseList from '../Components/CourseList';

const HomePage = () => {
    return (
        <React.Fragment>
            <BannerCarousel />
            <CourseList />
        </React.Fragment>
    );
};

export default HomePage;