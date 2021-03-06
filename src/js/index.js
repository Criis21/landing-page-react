//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import App from "./App.js";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
