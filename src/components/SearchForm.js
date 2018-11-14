import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <section className="SearchForm">
        <div className="search">
          <form onSubmit={this.props.handleSubmit}>
            <input
              onChange={this.props.handleChange}
              type="text"
              value={this.props.value}
            />
            <select onChange={this.props.hadnleDate} value={this.props.date}>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="this_weekend">This weekend</option>
              <option value="this_week">This week</option>
              <option value="next_week">Next week</option>
              <option value="this_month">This month</option>
              <option value="next_month">Next month</option>
            </select>
            <input type="submit" value="Search" />
          </form>
        </div>
      </section>
    );
  }
}

export default SearchForm;
