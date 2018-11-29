import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import NewItem from "./components/NewItem";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/create-item" component={NewItem} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
