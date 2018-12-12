import React from "react";
import "./scss/style.scss";

const SearchForm = props => {
  return (
    <section className="searchForm">
      <div className="container">
        <form onSubmit={props.handleSubmit}>
          <div className="inputBlock">
            <input
              className="inputKey"
              onChange={props.handleChange}
              type="text"
              value={props.value}
              placeholder="Search the place"
            />
            <button className="searchBtn" type="submit">
              <i className="fas fa-search-location fa-lg	" />
            </button>
          </div>
          <div className="selectBlock">
            <select
              className="selectBtn"
              onChange={props.hadnleDate}
              value={props.date}
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="this_weekend">This weekend</option>
              <option value="this_week">This week</option>
              <option value="next_week">Next week</option>
              <option value="this_month">This month</option>
              <option value="next_month">Next month</option>
            </select>
            <select
              className="selectBtn"
              onChange={props.hadnleCategory}
              value={props.category}
            >
              <option value="103">Music</option>
              <option value="101">Business & Professional</option>
              <option value="110">Food & Drink</option>
              <option value="113">Community & Culture</option>
              <option value="105">Performing & Visual Arts</option>
              <option value="104">Film, Media & Entertainment</option>
              <option value="108">Sports & Fitness</option>
              <option value="107">Health & Wellness</option>
              <option value="102">Science & Technology</option>
              <option value="109">Travel & Outdoor</option>
              <option value="111">Charity & Causes</option>
              <option value="114">Religion & Spirituality</option>
              <option value="115">Family & Education</option>
              <option value="116">Seasonal & Holiday</option>
              <option value="112">Government & Politics</option>
              <option value="106">Fashion & Beauty</option>
              <option value="117">Home & Lifestyle</option>
              <option value="118">Auto, Boat & Air</option>
              <option value="119">Hobbies & Special Interest</option>
              <option value="199">Other</option>
              <option value="120">School Activities</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
