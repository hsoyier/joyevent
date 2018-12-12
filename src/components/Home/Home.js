import React from "react";
import "../../App.scss";
import Events from "../Events/Events";
import SearchForm from "../SearchForm/SearchForm";

const Home = props => {
  return (
    <React.Fragment>
      <SearchForm
        value={props.value}
        date={props.date}
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        hadnleDate={props.hadnleDate}
        hadnleCategory={props.hadnleCategory}
      />
      <main>
        <Events eventsDatas={props.eventsDatas} />
      </main>
    </React.Fragment>
  );
};

export default Home;
