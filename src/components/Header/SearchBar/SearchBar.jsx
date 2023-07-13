import React, { useState } from 'react';
import './SearchBar.scss';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
