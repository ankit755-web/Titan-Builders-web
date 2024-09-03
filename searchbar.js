import React, { useState } from 'react';

const SearchBar = () => {
 const [text, setText] = useState('');

 const onInputChange = (e) => {
    setText(e.target.value);
 };

 const onFormSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    console.log('You searched for:', text);

    // Clear the search field
    setText('');
 };

 return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies, series, or people"
          value={text}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
 );
};

export default SearchBar;