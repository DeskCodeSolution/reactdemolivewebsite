import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import NavBar from "./NavBar";
import "../styles/App.css";

function App() {
  return (
    <>
      <div className="root">
        <NavBar />
        {/* <div className="h-100 d-flex align-items-center"> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
            {/* <Route component={Error} /> */}
          </Switch>
        {/* </div> */}
        <footer className="bg-light">copyRight Deskcode.Pvt.Ltd</footer>
      </div>
    </>
  );
}

export default App;
