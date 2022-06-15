import React, { Component, Fragment } from "react";
import Sidebar from "../component/sidebar";
import Welcomecard from "../component/welcome";
import cek from "../assets/img/cek.png";
import cookie from "js-cookie";
import PopupTanaman from "../component/popup-tanaman";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAkun: [],
      dataRekom: [],
      cuaca: "Cerah",
      pertanian: false,
    };
  }

  getRekom() {
    fetch("http://api-stani.egdev.co/api/v1/stani/rekom/EGDEVoPoqqs1jj23n", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: cookie.get("akun"),
    })
      .then((res) => res.json())
      .then((body) => {
        this.setState({
          dataRekom: body,
        });
      });
  }

  popupTanamans(a) {
    const tanamanCard = document.getElementById("popup-tanaman");
    const body = document.querySelector("body");
    const deskripsi = document.getElementById("deskripsi");
    const modal = document.getElementById("modal");
    const durasi = document.getElementById("durasi");
    const nama = document.getElementById("nama-tanaman");
    const pilih = document.getElementById("pilih-btn");

    tanamanCard.classList.add("active");
    body.classList.add("pop-act");
    deskripsi.innerHTML = this.state.dataRekom[a].deskripsi;
    modal.innerHTML = this.state.dataRekom[a].modal + " /ha";
    durasi.innerHTML = this.state.dataRekom[a].durasi + " /hari";
    nama.innerHTML = this.state.dataRekom[a].nama;

    pilih.addEventListener("click", () => {
      fetch("http://api-stani.egdev.co/api/v1/stani/pilih/EGDEVoPoqqs1jj23n", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: this.state.dataRekom[a].nama,
          id_petani: this.state.dataAkun.id,
        }),
      })
        .then((res) => res.json())
        .then((hasil) => {
          console.log(hasil);
          tanamanCard.classList.remove("active");
          body.classList.remove("pop-act");
        });
    });
  }

  componentDidMount() {
    this.getRekom();
    if (cookie.get("akun")) {
      this.setState({
        dataAkun: JSON.parse(cookie.get("akun")),
        isLoaded: true,
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 0) {
      this.setState({
        cuaca: "Cerah",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 1) {
      this.setState({
        cuaca: "Cerah Berawan",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 2) {
      this.setState({
        cuaca: "Cerah Berawan",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 3) {
      this.setState({
        cuaca: "Berawan",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 4) {
      this.setState({
        cuaca: "Berawan Tebal",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 5) {
      this.setState({
        cuaca: "Udara kabur",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 10) {
      this.setState({
        cuaca: "Asap",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 45) {
      this.setState({
        cuaca: "Kabut",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 60) {
      this.setState({
        cuaca: "Hujan Ringan",
      });
    }
    if (JSON.parse(cookie.get("akun")).cuaca === 61) {
      this.setState({
        cuaca: "Hujan Sedang",
      });
    }
    if (JSON.parse(cookie.get("akun")).status_pertanian === 1) {
      this.setState({
        pertanian: true,
      });
    }
  }

  render() {
    console.log(this.state.dataRekom);
    return [
      <Fragment>
        <Sidebar />
        <div className="konten">
          <div className="container">
            <h3 className="mb-1">Dashboard</h3>
            <Welcomecard />
            <div className="row">
              <div key="1" className="card-custom mr-3">
                <h6 className="abu">Petani Dataran</h6>
                <h1>{this.state.dataAkun.ketinggian} mdpl</h1>
              </div>
              <div key="2" className="card-custom mr-3">
                <h6 className="abu">Prakiraan cuaca Pertanian</h6>
                <h1>{this.state.cuaca}</h1>
              </div>
              <div key="3" className="card-custom">
                <h6 className="abu">Profil Resiko</h6>
                <h1>{this.state.dataAkun.resiko}/10</h1>
              </div>
            </div>
            {this.state.pertanian ? (
              <div className="table mt-3 mb-3">
                <div className="card-table-head bg-hijau">
                  <div className="center">
                    <h4>Ini Detail Tanamanmu</h4>
                  </div>
                </div>
                <div className="card-table-body">
                  <div className="row mt-3 max-card">
                    <div className="img-detail-tanaman mr-3">
                      <img
                        src="https://s0.bukalapak.com/img/01813734042/large/data.jpeg.webp"
                        alt="tanaman"
                      />
                      <div className="row mt-1">
                        <i className="far fa-money-bill-alt"></i>
                        <p className="kecil ml-1">Rp. 16,6jt/ha</p>
                      </div>
                      <div className="row mt-1">
                        <i className="far fa-clock"></i>
                        <p className="kecil ml-1">40-50 Hari</p>
                      </div>
                      <button
                        className="btn btn-block mt-1 bg-merah"
                        onClick={() => {
                          fetch(
                            "http://api-stani.egdev.co/api/v1/stani/selesai/EGDEVoPoqqs1jj23n",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                id_petani: this.state.dataAkun.id,
                              }),
                            }
                          )
                            .then((res) => res.json())
                            .then((hasil) => {
                              console.log(hasil);
                            });
                        }}
                      >
                        Selesai
                      </button>
                    </div>
                    <div className="text-detail-tanaman">
                      <h3>Jagung</h3>
                      <p className="mb-1 kecil">
                        Jagung adalah salah satu tanaman pangan penghasil
                        karbohidrat yang terpenting di dunia, selain gandum dan
                        padi. Bagi penduduk Amerika Tengah dan Selatan, bulir
                        jagung adalah pangan pokok, sebagaimana bagi sebagian
                        penduduk Afrika dan beberapa daerah di Indonesia.
                      </p>
                      <h4 className="mb-1">Ketersediaan Video Pembelajaran</h4>
                      <div className="row">
                        <img
                          className="tubnail-yt-sm"
                          src="https://i.ytimg.com/vi/1CSlqOqjKpM/maxresdefault.jpg"
                          alt="tubnail-yt"
                        />
                        <img
                          className="tubnail-yt-sm"
                          src="https://8villages-dashboard.s3.amazonaws.com/1583463035-362-191265.jpg"
                          alt="tubnail-yt"
                        />
                        <img
                          className="tubnail-yt-sm"
                          src="https://i2.wp.com/gdmorganic.com/wp-content/uploads/2020/09/IMG20170921110106-1024x600.jpg"
                          alt="tubnail-yt"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="table mt-3">
                <div className="card-table-head bg-hijau">
                  <div className="center">
                    <h4>Ini rekomendasi S'Tani</h4>
                  </div>
                </div>
                <div className="card-table-body">
                  {this.state.dataRekom.map((rekom, index) => (
                    <div
                      key={rekom.id}
                      className="item-stani"
                      onClick={() => this.popupTanamans(index)}
                    >
                      <div className="border-item bg-hijau-muda"></div>
                      <h4>{rekom.nama}</h4>
                      <img className="cek" src={cek} alt="cek" />
                      <img className="cek" src={cek} alt="cek" />
                      <img className="cek" src={cek} alt="cek" />
                      <h4>{rekom.rasio_pasar}</h4>
                      <h4>Sangat Cocok</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <PopupTanaman />
      </Fragment>,
    ];
  }
}

export default Dashboard;
