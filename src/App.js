import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { getCoursesList } from './Redux/Actions/courses';
import { connect } from 'react-redux';

// IMPORT COMPONENT
import Layout from './Layout';

function App(props) {
  useEffect(() => {
    props.getCoursesList();
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCoursesList: () => dispatch(getCoursesList()),
  }
}

export default connect(null, mapDispatchToProps)(App);
