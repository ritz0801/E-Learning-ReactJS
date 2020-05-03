import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllCourseList from '../Components/AllCourseList';
import UserAuth from '../Components/Authentication/userAuth';
import CourseDetail from '../Components/CourseDetail';
import CourseLearn from '../Components/CourseLearn';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Lesson from '../Components/Lesson';
import Profile from '../Components/Profile';
import "../Style/main.scss";
import HomePage from './HomePage';

const Layout = (props) => {
    return (
        <Route>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/all-courses" exact component={AllCourseList} />
                <Route path="/course-detail/:_id" exact component={CourseDetail} />
                <UserAuth path="/course-learn/:_id" exact component={CourseLearn} />
                <UserAuth path="/course-learn/:_id/lesson/:_idLesson" exact component={Lesson} />
                {/* <Route path="/course-learn/:_id" exact component={CourseLearn} /> */}
                <UserAuth path="/profile/:_id" exact component={Profile} />
            </Switch>
            <Footer />
        </Route>
    );
};

export default Layout;