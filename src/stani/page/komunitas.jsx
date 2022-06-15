import React, { Component, Fragment } from "react";
import Sidebar from "../component/sidebar";
import Welcomecard from "../component/welcome";
// import cookie from "js-cookie";

class Komunitas extends Component{
    constructor(props) {
        super(props);
        this.state={
            dataKomunitas: [],
        }
    }

    getData(){
        fetch("http://staniv2.ddns.net:5001/api/v1/stani/komunitas/EGDEVoPoqqs1jj23n")
        .then((res) => res.json())
        .then((body) => {
            this.setState({
                dataKomunitas: body
            })
        })
      }

      componentDidMount(){
          this.getData();
      }

    render(){
        const {dataKomunitas} = this.state;
        return[
            <Fragment>
                <Sidebar />
                <div className="konten">
                    <div className="container">
                        <h3 className="mb-1">Komunitas Petani</h3>
                        <Welcomecard />
                        <p className="mb-3">Ini dia komunitas stani tersebar di berbagai daerah</p>
                        {dataKomunitas.map((items)=>(
                             <div key="1" className="item-stani">
                             <div className="border-item bg-hijau-muda">
                             </div>
                             <h4>{items.nama}</h4>
                             <h4>{items.kota}</h4>
                             <h4>{items.tanaman}</h4>
                         </div>
                        ))}
                    </div>
                </div>
            </Fragment>
        ]
    }
}

export default Komunitas;