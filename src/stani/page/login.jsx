import React, { Component, Fragment } from "react";
import Header from "../component/header";
import loginImg from "../assets/img/login-img.png";
import cookie from "js-cookie";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLogin: {
        username: "",
        pw: "",
      },
      isLogin: false,
    };
  }
  postLogin = () => {
    fetch("http://api-stani.egdev.co/api/v1/stani/login/EGDEVoPoqqs1jj23n", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.formLogin),
    })
      .then((res) => res.json())
      .then((body) => {
        if (body.pesan) {
          return alert(body.pesan);
        } else {
          cookie.set("akun", body);
          this.setState({
            isLogin: true,
          });
        }
      });
  };

  handleSubmit = (e) => {
    this.postLogin();
    e.preventDefault();
  };
  componentDidMount() {
    if (cookie.get("akun")) {
      this.setState({
        isLogin: true,
      });
    }
  }

  handleFrom = (e) => {
    const newFrom = { ...this.state.formLogin };
    newFrom[e.target.name] = e.target.value;
    this.setState(
      {
        formLogin: newFrom,
      },
      () => {
        console.log(this.state.formLogin);
      }
    );
    e.preventDefault();
  };
  render() {
    if (this.state.isLogin) {
      return <Redirect to="/dashboard" />;
    }
    return [
      <Fragment>
        <Header />
        <main>
          <section id="main">
            <div className="container">
              <div className="main">
                <div className="img-login">
                  <img src={loginImg} alt="loginImg" />
                </div>
                <div className="login-wrapper ml-3">
                  <div className="center">
                    <h1 className="hijau-muda mb-1">LOGIN</h1>
                    <div className="input-group">
                      <label htmlFor="username" className="hijau-muda">
                        Username
                      </label>
                      <input
                        type="text"
                        onChange={this.handleFrom}
                        className="input-login"
                        name="username"
                      />
                    </div>
                    <div className="input-group mb-1">
                      <label htmlFor="pw" className="hijau-muda">
                        Password
                      </label>
                      <input
                        type="password"
                        onChange={this.handleFrom}
                        className="input-login"
                        name="pw"
                      />
                    </div>
                    <div className="input-group">
                      <button
                        onClick={this.handleSubmit}
                        className="btn btn-block bg-hijau-muda mb-1"
                      >
                        Login
                      </button>
                      <p className="bold kecil">
                        Tidak punya akun <Link to="/regis">Klik disini</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="jumbotrons-login bg-hijau-muda">
            <div className="container">
              <h2>S'TANI</h2>
            </div>
          </section>
        </main>
      </Fragment>,
    ];
  }
}

export default Login;
