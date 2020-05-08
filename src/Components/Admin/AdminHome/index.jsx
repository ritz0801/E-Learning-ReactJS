import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../../Redux/Actions/user';

const AdminHome = (props) => {
    const userLocalStorage = localStorage.getItem("user");
    const userLocalStorageParse = JSON.parse(userLocalStorage);

    useEffect(() => {
        if (userLocalStorage) {
            props.login(userLocalStorageParse);
        }
    }, [])

    return (
        <div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(login(user));
        },
        logout: () => {
            dispatch(logout());
        },
    }
}

export default connect(null, mapDispatchToProps)(AdminHome);