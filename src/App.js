import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Event from "./components/Event/Event";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <div>about</div>} />
          <Route path="/event/:id" component={Event} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
