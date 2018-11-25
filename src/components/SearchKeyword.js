import React from "react";

const SearchKeyword = props => {
  return (
    <div className="searchKeyword">
      <div className="container">
        <p className="searchKeyword__text">
          {props.value.charAt(0).toUpperCase() + props.value.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default SearchKeyword;
