import React from 'react';
import NavBar from './NavBar';

const Admin = (props) => {
    return (
        <React.Fragment>
            <div className="row w-100">
                <div className="navbar col-md-2 p-0">
                    <NavBar />
                </div>
                <div className="content col-md-10 p-0">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Admin;