import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

class Header extends Component{
    render(){
        return[
            <Fragment>
            <header>
                <div className="nav-left">
                <Link to="/" className="none-style">
                    <h1 className="hitam"><span className="hijau">S</span>'Tani</h1>
                </Link>
                </div>
                <div className="nav-right">
                        <li key="1">Home</li>
                        <li key="2">About</li>
                        <li key="3">Our Team</li>
                        <Link key="4" to="/login">
                        <button className="btn btn-small bg-hijau">Login</button>
                        </Link>
                </div>
            </header>
            </Fragment>
        ]
    }
}

export default Header;