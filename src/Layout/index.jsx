import React from 'react';
import Header from "../Components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "../Style/main.scss";
import Footer from "../Components/Footer";
import HomePage from './HomePage';

const Layout = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Layout;