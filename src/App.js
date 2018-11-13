import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Events from './components/Events';

const PERSONAL_OAUTH_TOKEN = "ZVYAWGFJWR3NSCZX6R4F";

class App extends Component {

  state = {
    title: "",
    image: "",
    date: "",
    time: "",
    location: ""
  }

  componentWillMount = () => {
    this.getApi();
  }

  getApi = async () => {
    // fetch the data only location.address = Vancouver
    const response = await fetch(`http://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search/?location.address=Vancouver&token=${PERSONAL_OAUTH_TOKEN}`);
    if (response.status === 200) {      
      const json = await response.json();
      const events = await json.events.map(event => event.name);
      console.log(events);
    }
   }

  render() {
    return (
      <div className="App">
        <Header />
        <Events />
        <Footer />
      </div>
    );
  }
}

export default App;
