import React, { Component, Fragment } from "react";
import Header from "../component/header";
import HomeHero from "../assets/img/home.png";
import imgKonten from "../assets/img/img-konten.png";
import barisImg from "../assets/img/barisImg.png";
import labu from "../assets/img/labu.png";
import { Link } from "react-router-dom";

class Main extends Component{
    render(){
        return[
            <Fragment>
                    <Header />
                    <main>
                        <section id="main">
                            <div className="container">
                                <div className="main">
                                <div className="text-wrapper ml-3">
                                    <h1>Wujudkan Petani Pintar</h1>
                                    <h4>Bersama kami dengan s'tani</h4>
                                    <p className="mt-1">Hey kamu tahu tidak tanaman yang kamu tanam belum tepat
                                    di tempat kamu tanam tidak percaya? ayo cari tahu di sini</p>
                                    <Link to="regis">
                                    <button className="btn btn-medium mt-1 bg-hijau">Discover More</button>
                                    </Link>
                                </div>
                                <div className="img-wrapper">
                                    <img src={HomeHero} alt="HomeHero"/>
                                </div>    
                                </div>                
                            </div>
                        </section>
                        <div className="bubble bg-hijau"></div>
                        <section className="main-2">
                            <div className="center">
                                <h2>Apasih???</h2>
                                <h4>Sabahat petani itu</h4>
                            </div>
                            <div className="main">
                                <div className="img-konten ml-5">
                                    <img src={imgKonten} alt="imgKonten"/>
                                </div>
                                <div className="text-wrapper2 mr-5">
                                    <h1>Gagal Panen?</h1>
                                    <h4>Kalo kata S'Tani mah , apa itu gagal panen?</h4>
                                    <p className="mt-1">Hindari gagal panen dengan rekomendasi jenis tanaman yang akan di tanam dengan s'tani s'tani akan memberimu rekomendasi yang sangat cocok dengan keadaanmu saat ini lohhh , ditambah dengan data data yang sudah di dapatkan dari s'tani yakin deh besok besok gak gagal panen</p>
                                </div>
                            </div>
                        </section>
                        <section className="jumbotron bg-coklat">
                            <div className="center mb-5">
                                <img src={barisImg} alt="barisImg"/>
                            </div>
                            <div className="center">
                                <h2>Tanaman Teratas</h2>
                                <h4>Ini nih tanaman yang sedang dibutuhkan</h4>
                            </div>
                            <div className="row">
                                <div className="card-tanaman bg-hijau">
                                    <div className="border-img">
                                        <img className="bg-hijau-muda" src={labu} alt="labu"/>
                                    </div>
                                    <div className="text-tanaman">
                                        <h4>Labu</h4>
                                        <h5>Keterangan</h5>
                                        <p>Tumbuhan ini sangat cocok untuk musim kemarau dan daya julanya sangat mantap</p>
                                    </div>
                                </div>
                                <div className="card-tanaman bg-hijau">
                                    <div className="border-img">
                                        <img className="bg-hijau-muda" src={labu} alt="labu"/>
                                    </div>
                                    <div className="text-tanaman">
                                        <h4>Labu</h4>
                                        <h5>Keterangan</h5>
                                        <p>Tumbuhan ini sangat cocok untuk musim kemarau dan daya julanya sangat mantap</p>
                                    </div>
                                </div>
                                <div className="card-tanaman bg-hijau">
                                    <div className="border-img">
                                        <img className="bg-hijau-muda" src={labu} alt="labu"/>
                                    </div>
                                    <div className="text-tanaman">
                                        <h4>Labu</h4>
                                        <h5>Keterangan</h5>
                                        <p>Tumbuhan ini sangat cocok untuk musim kemarau dan daya julanya sangat mantap</p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                        </section>
                        <section className="jumbotrons bg-abu">
                            <div className="container">
                                <h2>S'TANI</h2>
                            </div>
                        </section>
                    </main>
            </Fragment>
        ]
    }
}

export default Main;