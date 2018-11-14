import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SearchForm from "./components/SearchForm";

const PERSONAL_OAUTH_TOKEN = "ZVYAWGFJWR3NSCZX6R4F";

class App extends Component {
  state = {
    eventsDatas: [],
    logo: "",
    value: ""
  };
  componentWillMount = () => {
    this.getApi();
  };
  getApi = async () => {
    const response = await fetch(
      `http://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?token=${PERSONAL_OAUTH_TOKEN}`
    );
    if (response.status === 200) {
      const json = await response.json();
      const events = await json.events;
      console.log(events);
      this.setState({
        eventsDatas: events
      });
    }
  };
  searchApi = async location => {
    const response = await fetch(
      `http://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?location.address=${location}&token=${PERSONAL_OAUTH_TOKEN}`
    );
    if (response.status === 200) {
      const json = await response.json();
      const events = await json.events;
      console.log(events);
      this.setState({
        eventsDatas: events
      });
    }
    this.categoriesApi();
  };
  handleSubmit = e => {
    e.preventDefault();
    const location = this.state.value;
    this.searchApi(location);
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    const { eventsDatas, value } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={value}
        />
        <main>
          <Events eventsDatas={eventsDatas} handlePage={this.handlePage} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
