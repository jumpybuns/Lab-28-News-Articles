import React from 'react';
import styles from './Search.css';

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.searchFilterOnChange}
      />
    </div>
  );
};

export default Search;
