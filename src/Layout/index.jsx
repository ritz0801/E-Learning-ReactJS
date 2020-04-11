import React from 'react';
import Header from "../Components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "../Style/main.scss";
import Footer from "../Components/Footer";
import HomePage from './HomePage';
import AllCourseList from '../Components/AllCourseList';
import CourseDetail from '../Components/CourseDetail';
import ScrollToTop from '../Containers/ScrollToTop';

const Layout = () => {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/all-courses" exact component={AllCourseList} />
                <Route path="/course-detail/:_id" exact component={CourseDetail} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Layout;