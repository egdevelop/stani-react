import React, { Component, Fragment } from "react";
import Sidebar from "../component/sidebar";
import Welcomecard from "../component/welcome";
import cookie from "js-cookie";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAkun: [],
      dataPost: [],
      formPost: {
        id: "",
        nama: "",
        isi: "",
      },
    };
  }

  getPost() {
    fetch("http://api-stani.egdev.co/api/v1/stani/forum/EGDEVoPoqqs1jj23n")
      .then((res) => res.json())
      .then((body) => {
        this.setState({
          dataPost: body,
        });
      });
  }

  postForum = (e) => {
    fetch("http://api-stani.egdev.co/api/v1/stani/forum/EGDEVoPoqqs1jj23n", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.formPost),
    })
      .then((res) => res.json())
      .then((hasil) => {
        this.setState({
          formPost: {
            id: "",
            nama: "",
            isi: "",
          },
        });
        if (hasil.pesan) {
          return alert(hasil.pesan);
        }
        this.getPost();
        document.getElementById("status").value = "";
      });
  };

  componentDidMount() {
    this.getPost();
    if (cookie.get("akun")) {
      this.setState({
        dataAkun: JSON.parse(cookie.get("akun")),
        isLoaded: true,
      });
    }
  }

  handleStatus = (e) => {
    const newForm = { ...this.state.formPost };
    newForm[e.target.name] = e.target.value;
    this.setState({
      formPost: newForm,
    });
  };

  handleStatusId(a, b) {
    const newForm = { ...this.state.formPost };
    newForm["id"] = a;
    newForm["nama"] = b;
    this.setState(
      {
        formPost: newForm,
      },
      () => {
        console.log(this.state.formPost);
      }
    );
  }

  render() {
    return [
      <Fragment>
        <Sidebar />
        <div className="konten">
          <div className="container">
            <h3 className="mb-1">Forum Petani</h3>
            <Welcomecard />
            <textarea
              onClick={() => {
                this.handleStatusId(
                  this.state.dataAkun.id,
                  this.state.dataAkun.nama
                );
              }}
              onChange={this.handleStatus}
              name="isi"
              id="status"
              className="input-status"
              placeholder="Ketikan Sesuatu....."
            ></textarea>
            <span
              onClick={this.postForum}
              className="hijau none-style float-right"
            >
              Tanam
            </span>
            {this.state.dataPost.map((post) => (
              <div key={post.id} className="card-custom border-none mt-3">
                <div className="row ml-1">
                  <div className="border-item bg-abu"></div>
                  <p className="mt-05 ml-2">{post.nama}</p>
                </div>
                <p className="mt-1 mb-3 ml-1">{post.isi}</p>
                <div className="row float-right love">
                  <span>3</span>
                  <i className="far fa-heart"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>,
    ];
  }
}

export default Forum;
