import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Events from "./components/Events";
import SearchForm from "./components/SearchForm";

const PERSONAL_OAUTH_TOKEN = "ZVYAWGFJWR3NSCZX6R4F";

class App extends Component {
  state = {
    eventsDatas: [],
    logo: "",
    value: "",
    date: ""
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
  searchApi = async () => {
    const { value, date } = this.state;
    const response = await fetch(
      `http://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?location.address=${value}&start_date.keyword=${date}&token=${PERSONAL_OAUTH_TOKEN}`
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
  handleSubmit = e => {
    e.preventDefault();
    this.searchApi();
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  hadnleDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  render() {
    const { eventsDatas, value, date } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          hadnleDate={this.hadnleDate}
          value={value}
          date={date}
        />
        <main>
          <Events eventsDatas={eventsDatas} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
