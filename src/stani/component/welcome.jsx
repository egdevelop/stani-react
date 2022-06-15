import { Component, Fragment } from "react";
import welcomeImg from "../assets/img/welcomeImg.png";
import cookie from "js-cookie";


class Welcomecard extends Component{
    constructor(props) {
        super(props);
        this.state={
            dataAkun:[],
        }
    }

    componentDidMount(){
        if (cookie.get("akun")) {
            this.setState({
              dataAkun: JSON.parse(cookie.get("akun")),
              isLoaded: true,
            });
          }
    }
    render(){
        return[
            <Fragment>
                 <div className="card-welcome mb-3 row bg-hijau-muda-40">
                            <div className="text-welcome">
                                <h4 className="hijau">Selamat datang {this.state.dataAkun.nama}</h4>
                                <p className="hitam kecil">
                                Kamu disini bisa memantau dan meminta rekomendasi sahabat petani untuk tanaman apasih yang cocok dan sedang di butuhkan sekarang
                                </p>
                            </div>
                            <img src={welcomeImg} alt="welcomeImg"/>
                        </div>
            </Fragment>
        ]
    }
}

export default Welcomecard;