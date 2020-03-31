import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import logo from '../../Assets/img/logoelearning.jpg';

const Header = () => {
    return (
        <header className="container-fluid myNavBar">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="col-xl-8 col-lg-9 col-md-8 col-sm-6">
                    <div className="row">
                        <NavLink className="navbar-brand" to="/">
                            <img src={logo} alt="Logo Udemy" />
                        </NavLink>
                        <NavLink className="myNavBar_categories" to='/all-courses'>
                            <i className="fa fa-th  mx-2" />
                            Tất cả khóa học
                        </NavLink>
                        <div className="myNavBar_search">
                            <form className="input-group ">
                                <input type="text" className="form-control" placeholder="Tìm khóa học bạn quan tâm..." />
                                <div className="input-group-append">
                                    <span className="btn input-group-text"><i className="fa fa-search" /></span>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* END row */}
                </div>
                {/* END col-6 */}
                <div className="col-xl-4 col-lg-3 col-md-4 col-sm-4">
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <i className="fa fa-shopping-cart" />
                            </li>
                            <li className="nav-item ">
                                <div className="button d-flex">
                                    <button className="btn mr-1 btn--white" type="submit">Đăng nhập</button>
                                    <button className="btn btn--red" type="submit">Đăng ký</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* END col-6 */}
                <button className="navbar-toggler d-lg-none col-sm-2" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </nav>
        </header>
    );
};

export default withRouter(Header);