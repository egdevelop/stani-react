import React, { Component, Fragment } from "react";
import Header from "../component/header";
import loginImg from "../assets/img/login-img.png";
import { Redirect,Link } from "react-router-dom";

class Regis extends Component{
    constructor(props) {
        super(props);
        this.state = {
          formRegis: {
            nama: "",
            username: "",
            pw: "",
            resiko: "",
          },
          isRegis: false,
        };
      }
      postRegis = () => {
        fetch("http://staniv2.ddns.net:5001/api/v1/stani/regis/EGDEVoPoqqs1jj23n", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.formRegis),
        })
          .then((res) => res.json())
          .then((body) => {
            if (body) {
                this.setState({
                    isRegis: true,
                  });
            }
          });
      };
    
      handleSubmit = (e) => {
        this.postRegis();
        e.preventDefault();
      };
    
      handleFrom = (e) => {
        const newFrom = { ...this.state.formRegis };
        newFrom[e.target.name] = e.target.value;
        this.setState(
          {
            formRegis: newFrom,
          },
          () => {
            console.log(this.state.formRegis);
          }
        );
        e.preventDefault();
      };
    render(){
        if (this.state.isRegis) {
            return <Redirect to="/login" />;
          }
        return[
            <Fragment>
                <Header />
                <main>
                    <section id="main">
                        <div className="container">
                            <div className="main">
                            <div className="img-login mt-3">
                                    <img src={loginImg} alt="loginImg"/>
                                </div>   
                                <div className="login-wrapper ml-3">
                                        <div className="center">
                                            <h2 className="hijau-muda mb-1">Register</h2>
                                            <div className="input-group">
                                            <label htmlFor="username" className="hijau-muda">Nama</label>
                                            <input type="text" onChange={this.handleFrom} className="input-login" name="nama"/>
                                            </div>
                                            <div className="input-group">
                                            <label htmlFor="username" className="hijau-muda">Username</label>
                                            <input type="text" onChange={this.handleFrom} className="input-login" name="username"/>
                                            </div>
                                            <div className="input-group mb-1">
                                            <label htmlFor="pw" className="hijau-muda">Password</label>
                                            <input type="password" onChange={this.handleFrom} className="input-login" name="pw"/>
                                            </div>
                                            <div className="input-group">
                                            <label htmlFor="username" className="hijau-muda">Toleransi terhadap kegagalan (1-10)</label>
                                            <input type="number" onChange={this.handleFrom} className="input-login" name="resiko"/>
                                            </div>
                                            <div className="input-group">
                                            <button onClick={this.handleSubmit} className="btn btn-block bg-hijau-muda mb-1">Tanam</button>
                                            <p className="bold kecil">Punya akun <Link to="/login">Klik disini</Link></p>
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
            </Fragment>
        ]
    }
}

export default Regis;