import React from 'react';
import './SearchBar.css';


function SearchBar() {
  return (
    <div className="search_bar">
        <ul>
            <li>Best Match</li>
            <li>Highest Rated</li>
            <li>Most Reviewed</li>
        </ul>
        <hr></hr>
        <div className="input">
            <input></input>
            <input></input>
        </div>

        <button>Let's Go!</button>

    </div>
  );
}

export default SearchBar;
