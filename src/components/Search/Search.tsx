import React from "react";

import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  return (
    <form className="search">
      <div className="search-input flex">
        <SearchIcon />
        <input type="text" name="search" value="" placeholder="search" />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
