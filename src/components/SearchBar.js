import React, { useState } from "react";

const SearchBar = props => {
  const [term, setTerm] = useState("furby");

  const onFormSubmit = event => {
    event.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="ui field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={e => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
