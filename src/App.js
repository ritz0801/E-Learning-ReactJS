import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getCoursesList } from './Redux/Actions/courses';
import { connect } from 'react-redux';


// IMPORT COMPONENT
import ScrollToTop from './Containers/ScrollToTop';
import Admin from './Components/Admin';
import Layout from './Layout';
import HomePage from './Layout/HomePage';
import AllCourseList from './Components/AllCourseList';
import CourseDetail from './Components/CourseDetail';
import CourseLearn from './Components/CourseLearn';
import Lesson from './Components/Lesson';
import Profile from './Components/Profile';
import UserAuth from './Components/Authentication/userAuth';
import AdminHome from './Components/Admin/AdminHome';
import AdminAuth from './Components/Authentication/adminAuth';
import AdminLoginForm from './Components/Admin/LoginForm';
import AddCourse from './Components/Admin/AddCourse';
import CourseList from './Components/Admin/CourseList';
import StudentList from './Components/Admin/StudentList';

// IMPORT STYLE
import './Style/main.scss';


function App(props) {
  useEffect(() => {
    props.getCoursesList();
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Admin path="/admin">
            <Switch>
              <Route path="/admin/login" exact component={AdminLoginForm} />
              <AdminAuth path="/admin/studentlist" exact component={StudentList} />
              <AdminAuth path="/admin/courselist" exact component={CourseList} />
              <AdminAuth path="/admin/addcourse" exact component={AddCourse} />
              <AdminAuth path="/admin" exact component={AdminHome} />
            </Switch>
          </Admin>
          <Layout path="/" >
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/all-courses" exact component={AllCourseList} />
              <Route path="/course-detail/:_id" exact component={CourseDetail} />
              <UserAuth path="/course-learn/:_id" exact component={CourseLearn} />
              <UserAuth path="/course-learn/:_id/lesson/:_idLesson" exact component={Lesson} />
              {/* <Route path="/course-learn/:_id" exact component={CourseLearn} /> */}
              <UserAuth path="/profile/:_id" exact component={Profile} />
            </Switch>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCoursesList: () => dispatch(getCoursesList()),
  }
}

export default connect(null, mapDispatchToProps)(App);
