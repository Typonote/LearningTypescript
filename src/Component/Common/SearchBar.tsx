import React from "react";
import "./scss/_SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="Search__Container">
      <div className="Search__Input">
        <svg
          className="Search__Icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input type="text" placeholder="작물의 이름을 검색해주세요" />
      </div>
    </div>
  );
};

export default SearchBar;
