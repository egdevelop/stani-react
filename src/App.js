import { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./stani/page/welcome";
import Login from "./stani/page/login";
import Dashboard from "./stani/page/dashboard";
import History from "./stani/page/history"
import Forum from "./stani/page/forum"
import Regis from './stani/page/register';
import Komunitas from './stani/page/komunitas';
import Market from './stani/page/market';

class App extends Component{
  render(){
    return[
      <Fragment>
        <Router>
        <Route key="1" path="/" exact component={Main} />
        <Route key="2" path="/login" exact component={Login} />
        <Route key="3" path="/dashboard" exact component={Dashboard} />
        <Route key="4" path="/history" exact component={History} />
        <Route key="5" path="/forum" exact component={Forum} />
        <Route key="6" path="/regis" exact component={Regis} />
        <Route key="7" path="/komunitas" exact component={Komunitas} />
        <Route key="8" path="/market" exact component={Market} />
        </Router>
      </Fragment>
    ]
  }

}

export default App;
