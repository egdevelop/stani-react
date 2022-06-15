import React, { Component, Fragment } from "react";
import "../assets/css/style.css";

class PopupTanaman extends Component{
    closeTanaman(){
        const tanamanCard = document.getElementById("popup-tanaman");
        const body = document.querySelector("body");

        tanamanCard.classList.remove("active");
        body.classList.remove("pop-act");
    }

    render(){
        return[
            <Fragment>
                <div className="popup-container" id="popup-tanaman">
                    <div className="popup">
                        <div className="popup-head">
                        <h5>Detail Tanaman</h5>
                        <span onClick={this.closeTanaman} className="float-right mt-min2 ">&times;</span>
                        </div>
                        <div className="row mt-3">
                            <div className="img-detail-tanaman mr-3">
                                <img src="https://s0.bukalapak.com/img/01813734042/large/data.jpeg.webp" alt="tanaman"/>
                                <div className="row mt-1">
                                <i className="far fa-money-bill-alt"></i>
                                <p className="kecil ml-1" id="modal"></p>
                                </div>
                                <div className="row mt-1">
                                <i className="far fa-clock"></i>
                                <p className="kecil ml-1" id="durasi"></p>
                                </div>
                                <button className="btn btn-block mt-3 bg-hijau" id="pilih-btn">Pilih</button>
                            </div>
                            <div className="text-detail-tanaman">
                                <h3 id="nama-tanaman"></h3>
                                <p className="mb-1" id="deskripsi"></p>
                                <h4 className="mb-1">Ketersediaan Video Pembelajaran</h4>
                                <div className="row">
                                    <img className="tubnail-yt" src="https://i.ytimg.com/vi/1CSlqOqjKpM/maxresdefault.jpg" alt="tubnail-yt"/>
                                    <img className="tubnail-yt" src="https://8villages-dashboard.s3.amazonaws.com/1583463035-362-191265.jpg" alt="tubnail-yt"/>
                                    <img className="tubnail-yt" src="https://i2.wp.com/gdmorganic.com/wp-content/uploads/2020/09/IMG20170921110106-1024x600.jpg" alt="tubnail-yt"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        ]
    }
}


export default PopupTanaman;