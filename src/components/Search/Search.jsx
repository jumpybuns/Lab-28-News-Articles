import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchArticles, onChange }) => (
  <div>
    <input type="text" value={searchArticles} onChange={onChange} />
  </div>
);

Search.propTypes = {
  searchArticles: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
