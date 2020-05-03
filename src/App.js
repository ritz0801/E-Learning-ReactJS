import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getCoursesList } from './Redux/Actions/courses';
import { connect } from 'react-redux';
import ScrollToTop from './Containers/ScrollToTop';
import AdminAuth from './Components/Authentication/adminAuth';
import Admin from './Components/Admin';
import LoginForm from './Components/Admin/LoginForm';

// IMPORT COMPONENT
import Layout from './Layout';

function App(props) {
  useEffect(() => {
    props.getCoursesList();
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <AdminAuth path="/admin/:_id" exact component={Admin} />
          <Route path="/admin/login" exact component={LoginForm} />
          <Layout />
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
