import React, { Component, Fragment } from "react";
import Sidebar from "../component/sidebar";
import Welcomecard from "../component/welcome";
import cookie from "js-cookie";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHistory: [],
    };
  }

  getHistory() {
    fetch("http://api-stani.egdev.co/api/v1/stani/history/EGDEVoPoqqs1jj23n", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: cookie.get("akun"),
    })
      .then((res) => res.json())
      .then((body) => {
        this.setState({
          dataHistory: body,
        });
      });
  }

  componentDidMount() {
    this.getHistory();
  }

  render() {
    return [
      <Fragment>
        <Sidebar />
        <div className="konten">
          <div className="container">
            <h3 className="mb-1">History Pengecekan</h3>
            <Welcomecard />
            <div className="table mt-3">
              <div className="card-table-head bg-hijau">
                <div className="center">
                  <h4>Ini adalah History pengecekan</h4>
                </div>
              </div>
              <div className="card-table-body">
                {this.state.dataHistory.map((his) => (
                  <div key="1" className="item-stani">
                    <div className="border-item bg-hijau-muda"></div>
                    <h4>{his.waktu}</h4>
                    <h4>{his.suhu}</h4>
                    <h4>{his.tanah}</h4>
                    <h4>{his.udara}</h4>
                    <h4>{his.ketinggian}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>,
    ];
  }
}

export default History;
