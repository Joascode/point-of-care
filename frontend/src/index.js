import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./elements/Layout";
import { PatientList, Patient, App, NotFound } from "./pages";

class TemporaryComponent extends React.Component {
  render() {
    return (
      <p>
        This is temporary and will be replaced when component for (
        {this.props.match.url}) is ready
      </p>
    );
  }
}

const router = (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/patient" component={PatientList} />
        <Route exact path="/mail" component={TemporaryComponent} />
        <Route exact path="/agenda" component={TemporaryComponent} />
        <Route exact path="/settings" component={TemporaryComponent} />
        <Route path="/patient/:id" component={Patient} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
