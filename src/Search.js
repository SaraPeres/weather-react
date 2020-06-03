import React from "react";

export default function Search() {
  return (
    <div>
      <form id="search-city-form">
        <input
          type="search"
          id="enter-city"
          placeholder="Enter city name"
          className="shadow-sm"
          autoComplete="off"
        />
        <input
          type="submit"
          id="search_city"
          value="Search"
          className="shadow-sm"
        />
      </form>
    </div>
  );
}
