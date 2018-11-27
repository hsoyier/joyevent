import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Events from "./components/Events/Events";
import SearchForm from "./components/SearchForm/SearchForm";
import SearchKeyword from "./components/SearchKeyword/SearchKeyword";

const PERSONAL_OAUTH_TOKEN = "ZVYAWGFJWR3NSCZX6R4F";

class App extends Component {
  state = {
    eventsDatas: [],
    logo: "",
    value: "",
    date: "",
    category: "",
    searchKeyword: ""
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
    const { value, date, category } = this.state;
    const response = await fetch(
      `http://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?location.address=${value}&start_date.keyword=${date}&categories=${category}&token=${PERSONAL_OAUTH_TOKEN}`
    );
    if (response.status === 200) {
      const json = await response.json();
      const events = await json.events;
      console.log(events);
      this.setState({
        eventsDatas: events,
        searchKeyword: <SearchKeyword value={value} />
      });
    } else {
      this.setState({
        searchKeyword: ""
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
  hadnleCategory = e => {
    this.setState({
      category: e.target.value
    });
  };
  render() {
    const { eventsDatas, value, date, searchKeyword } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          hadnleDate={this.hadnleDate}
          hadnleCategory={this.hadnleCategory}
          value={value}
          date={date}
        />
        {searchKeyword}
        <main>
          <Events eventsDatas={eventsDatas} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
