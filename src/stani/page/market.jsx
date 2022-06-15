import React, { Component, Fragment } from "react";
import Sidebar from "../component/sidebar";
import Welcomecard from "../component/welcome";
// import cookie from "js-cookie";


class Market extends Component{
    constructor(props) {
        super(props);
        this.state={
            dataMarket: [],
        }
    }

    getData(){
        fetch("http://staniv2.ddns.net:5001/api/v1/stani/market/EGDEVoPoqqs1jj23n")
        .then((res) => res.json())
        .then((body) => {
            this.setState({
                dataMarket: body
            })
        })
      }

      componentDidMount(){
          this.getData();
      }



    render(){
        const {dataMarket} = this.state;
        return[
            <Fragment>
                <Sidebar />
                <div className="konten">
                    <div className="container">
                        <h3 className="mb-1">Market Petani</h3>
                        <Welcomecard />
                        {dataMarket.map((items)=>(
                            <div className="card-market">
                            <img src={items.foto} alt="produk" />
                            <h5>{items.nama}</h5>
                            <p>Rp.{items.harga}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        ]
    }
}

export default Market;