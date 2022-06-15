import React, { Component, Fragment } from "react";
import { Link,Redirect } from "react-router-dom";
import "../assets/css/style.css";
import cookie from "js-cookie";

class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLogout: false,
        };
      }
    
      handleLogout = (e) => {
        cookie.remove("akun");
        this.setState({
          isLogout: true,
        });
        e.preventDefault();
      };
    render(){
        if (this.state.isLogout) {
            return <Redirect to="/" />;
          }
        return[
            <Fragment>
                <div className="sidebar">
                    <div className="mb-5 pt-2 center logo-side">
                        <h1 className="hitam"><span className="hijau">S</span>'TANI</h1>
                    </div>
                    <Link key="1" to="/dashboard" className="none-style">
                    <li className="hitam"><i className="fas fa-home"></i>&emsp;Dashboard</li>
                    </Link>
                    <Link key="2" to="/history" className="none-style">
                    <li className="hitam"><i className="fas fa-history"></i>&emsp;History Pengecekan</li>
                    </Link>
                    <Link key="3" to="/forum" className="none-style">
                    <li className="hitam"><i className="far fa-user-circle"></i>&emsp;Forum</li>
                    </Link>
                    <Link key="5" to="/market" className="none-style">
                    <li className="hitam"><i className="fas fa-shopping-basket"></i>&emsp;Marketplace</li>
                    </Link>
                    <Link key="4" to="/komunitas" className="none-style">
                    <li className="hitam"><i className="fas fa-user-friends"></i>&emsp;Komunitas</li>
                    </Link>
                    <div className="center">
                    <button onClick={this.handleLogout} className="btn btn-large mt-b outline-red">Logout</button>
                    </div>
                </div>
            </Fragment>
        ]
    }
}

export default Sidebar;