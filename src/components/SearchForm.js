import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SearchBar = styled.section`
  margin: 100px 250px;
`;

function SearchForm({ handleChange, searchTerm }) {
  return (
    <SearchBar className="search-form">
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </SearchBar>
  );
}

export default SearchForm;