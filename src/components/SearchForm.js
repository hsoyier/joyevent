import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <section className="searchForm">
        <div className="container">
          <form onSubmit={this.props.handleSubmit}>
            <div className="inputBlock">
              <input
                className="inputKey"
                onChange={this.props.handleChange}
                type="text"
                value={this.props.value}
                placeholder="Search the place"
              />
              <button className="searchBtn" type="submit">
                <i className="fas fa-search-location fa-lg	" />
              </button>
            </div>
            <div className="selectBlock">
              <select onChange={this.props.hadnleDate} value={this.props.date}>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
                <option value="this_weekend">This weekend</option>
                <option value="this_week">This week</option>
                <option value="next_week">Next week</option>
                <option value="this_month">This month</option>
                <option value="next_month">Next month</option>
              </select>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default SearchForm;
